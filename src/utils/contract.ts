import TokenContractAbi from '@/contracts/OgasaToken.json'
import AirdropContractAbi from '@/contracts/OgasaDrop.json'
import CrowdsaleContractAbi from '@/contracts/OgasaCrowdSale.json'

export const TokenContract = {
  addressOrName: '0x9ea9de759c270d1040CE872D455B82F01551942F',
  contractInterface: TokenContractAbi.abi
}

export const AirdropContract = {
  addressOrName: '0x1a6ff9dcba240ff6881a072a073a92ac9a62f890',
  contractInterface: AirdropContractAbi.abi
}

export const CrowdsaleContract = {
  addressOrName: '0xf1e84b6f3bb5377820d89d8b16050b823932fe31',
  contractInterface: CrowdsaleContractAbi.abi
}