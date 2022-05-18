import { useCall } from "@usedapp/core"
import {
  AirdropContract,
  CrowdsaleContract,
  TokenContract,
} from "@/utils/contract";

export function useGetRefLink(): string | undefined {
  const { value, error } = useCall({
    contract: CrowdsaleContract,
    method: 'getRefLink',
    args: []
  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  // console.log(value)
  return value?.[0]
}

export function useGetReferrals(): string | undefined {
  const { value, error } = useCall({
    contract: CrowdsaleContract,
    method: 'getRefLink',
    args: []
  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  console.log(value)
  return value?.[0]
}