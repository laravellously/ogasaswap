import React, { Component, Ref } from "react";
import { Button } from "@mui/material";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";

type NetworkLink<LinkOptions> = (url: string, options: LinkOptions) => string;

const isPromise = (obj: any | Promise<any>) =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

function windowOpen(
  url: string,
  {
    height,
    width,
    ...configRest
  }: { height: number; width: number; [key: string]: any },
  onClose?: (dialog: Window | null) => void
) {
  const config: { [key: string]: string | number } = {
    height,
    width,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "no",
    centerscreen: "yes",
    chrome: "yes",
    ...configRest,
  };

  const shareDialog = window.open(
    url,
    "",
    Object.keys(config)
      .map((key) => `${key}=${config[key]}`)
      .join(", ")
  );

  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }, 1000);
  }

  return shareDialog;
}

function objectToGetParams(object: {
  [key: string]: string | number | undefined | null;
}) {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    );

  return params.length > 0 ? `?${params.join("&")}` : "";
}

export const ShareButton = () => {
  const link =
  "https://twitter.com/share" +
  objectToGetParams({
    url: "https://ogasaswap.com",
    title: "Ogasaswap",
    hashtags: "ogasaswap",
  });

  const windowConfig = {
    height: 400,
    width: 550,
    left:
    window.outerWidth / 2 +
    (window.screenX || window.screenLeft || 0) -
    550 / 2,
  top:
    window.outerHeight / 2 +
    (window.screenY || window.screenTop || 0) -
    400 / 2
  };

  return (
    <Button
      size="small"
      startIcon={<ShareTwoToneIcon />}
      variant="outlined"
      onClick={() => windowOpen(link, windowConfig)}
    >
      Share To Twitter
    </Button>
  );
};
