import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { OgasaToken, OgasaDrop, OgasaCrowdSale } from 'src/types'
import TokenContractAbi from '@/contracts/OgasaToken.json'
import AirdropContractAbi from '@/contracts/OgasaDrop.json'
import CrowdsaleContractAbi from '@/contracts/OgasaCrowdSale.json'

const provider = new Web3Provider(window.ethereum);

const TokenInterface = new utils.Interface(TokenContractAbi.abi)
const AirdropInterface = new utils.Interface(AirdropContractAbi.abi)
const CrowdsaleInterface = new utils.Interface(CrowdsaleContractAbi.abi)

export const TokenContract = new Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", TokenInterface, provider.getSigner()) as OgasaToken
export const AirdropContract = new Contract("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", AirdropInterface, provider.getSigner()) as OgasaDrop
export const CrowdsaleContract = new Contract("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", CrowdsaleInterface, provider.getSigner()) as OgasaCrowdSale