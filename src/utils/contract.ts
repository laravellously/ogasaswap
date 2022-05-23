import { ethers } from 'ethers';
// ABIs
import TokenContractAbi from 'src/contracts/OgasaToken.json';
import OgasaDropContractAbi from 'src/contracts/OgasaDrop.json'
import CrowdsaleContractAbi from 'src/contracts/OgasaDrop.json'
// Types
import type { OgasaToken } from 'src/types/OgasaToken';
import type { OgasaDrop } from 'src/types/OgasaDrop';
import type { OgasaCrowdSale } from 'src/types/OgasaCrowdSale';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Interfaces
const TokenContractInterface = new ethers.utils.Interface(TokenContractAbi.abi);
const OgasaDropContractInterface = new ethers.utils.Interface(OgasaDropContractAbi.abi);
const CrowdsaleContractInterface = new ethers.utils.Interface(CrowdsaleContractAbi.abi);

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

const CrowdsaleContract = new ethers.Contract(
  '0xf1e84b6f3bb5377820d89d8b16050b823932fe31',
  CrowdsaleContractInterface,
  signer
) as OgasaCrowdSale;

export { TokenContract, OgasaDropContract, CrowdsaleContract };
