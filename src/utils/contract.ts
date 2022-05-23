import { ethers } from 'ethers';
// ABIs
import TokenContractAbi from 'src/contracts/OgasaToken.json';
import OgasaDropContractAbi from 'src/contracts/OgasaDrop.json'
// Types
import type { OgasaToken } from 'src/types/OgasaToken';
import type { OgasaDrop } from 'src/types/OgasaDrop';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Interfaces
const TokenContractInterface = new ethers.utils.Interface(TokenContractAbi.abi);
const OgasaDropContractInterface = new ethers.utils.Interface(OgasaDropContractAbi.abi);

// Contracts
const TokenContract = new ethers.Contract(
  '0x9ea9de759c270d1040CE872D455B82F01551942F',
  TokenContractInterface,
  signer
) as OgasaToken;

const OgasaDropContract = new ethers.Contract(
  '0x1a6ff9dcba240ff6881a072a073a92ac9a62f890',
  OgasaDropContractInterface,
  signer
) as OgasaDrop;

export { TokenContract, OgasaDropContract };
