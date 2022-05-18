import axios from "axios";

/**
 * @param {Record<any, any>} response
 * @param {string} longUrl
 * @return {*}  {IResponse}
 */
function responseMap(response: Record<any, any>) {
  const responseType = response.headers["content-type"].split(";")[0];
  if (["text/plain", "text/html"].includes(responseType)) return response.data;
}

type providers = "isgd" | "cdpt" | "kroom" | "tinyurl" | "tinube" | "4hnet";

/**
 *
 *
 * @interface IResponse
 */
interface IResponse {
  shortUrl: string;
}

/**
 *
 *
 * @interface IOptions
 */
interface IOptions {
  provider: providers;
  timeout?: number;
}

/**
 *
 *
 *
 * @interface IProviders
 */
interface IProviders {
  url: string;
  method: string;
  body?: any;
  formData?: boolean;
}

/**
 *
 *
 * @param {{ url: string; method: string }} provider
 * @param {string} longUrl
 * @return {*}
 */
const getAxios = (provider: IProviders, longUrl: string, option: IOptions) => {
  if (provider.method === "get") {
    return axios.get(provider.url + longUrl, {
      timeout: option.timeout,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } else {
    return axios.post(provider.url, provider.body(longUrl), {
      timeout: option.timeout,
    });
  }
};

const ValidProviders: Record<string, IProviders> = {
  isgd: {
    url: "https://is.gd/create.php?format=simple&url=",
    method: "get",
  },
  kroom: {
    url: "https://www.kroom.tk/short?url=",
    method: "get",
  },
  tinyurl: {
    url: "https://tinyurl.com/api-create.php?url=",
    method: "get",
  },
  cdpt: {
    url: "https://cdpt.in/shorten?url=",
    method: "get",
  },
  "4hnet": {
    url: "https://4h.net/api.php?url=",
    method: "get",
  },

  // POST APIS

  tinube: {
    url: "https://api.tinu.be/api/shorten",
    method: "post",
    body: (val: string) => {
      return { longUrl: val };
    },
  },
};

/**
 *
 *
 * @export
 * @param {string} longUrl
 * @param {IOptions} option
 * @return {IResponse}
 */
export default async (
  longUrl: string,
  option: IOptions = { provider: "isgd", timeout: 2000 }
): Promise<IResponse> => {
  try {
    const response = await getAxios(
      ValidProviders[option.provider],
      longUrl,
      option
    );
    return responseMap(response);
  } catch (error) {
    throw new Error("an error occured");
  }
};
