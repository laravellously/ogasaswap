import { useState } from 'react'
import { CrowdsaleContract } from 'src/utils/contract'
import { useAccount } from 'wagmi'

type Referrals = any
type getReferralsFn = (text: string) => Promise<boolean> // Return success

function useReferrals(): [Referrals, getReferralsFn] {
  const [referrals, setReferrals] = useState<any>(null)
  const { data: account } = useAccount()

  const getReferrals: getReferralsFn = async text => {
    if (!account) {
      console.warn('Not logged in')
      return false
    }

    try {
      const trxFilter = CrowdsaleContract.filters.Referral(account.address)
      const refrr = await CrowdsaleContract.queryFilter(trxFilter, -1000, 'latest');
      setReferrals(refrr)
      return true
    } catch (error) {
      console.warn('Request failed', error)
      setReferrals(null)
      return false
    }
  }

  return [referrals, getReferrals]
}

export default useReferrals
