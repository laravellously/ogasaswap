/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense, lazy } from 'react';
import { Navigate, useSearchParams, } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';
import { useLocalStorage } from 'react-use';
import SidebarLayout from 'src/layouts/SidebarLayout';
import SuspenseLoader from 'src/components/SuspenseLoader';
import BaseLayout from './layouts/BaseLayout';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const Home = Loader(lazy(() => import('src/views/dashboards/Crypto')))
const Referrals = Loader(lazy(() => import('src/views/referrals')))
const Airdrop = Loader(lazy(() => import('src/views/airdrop')))
const RedeemPage = Loader(lazy(() => import('src/views/airdrop/redeem')))
const Transactions = Loader(lazy(() => import('src/views/transactions')))
const Contribute = Loader(lazy(() => import('src/views/transactions')))
const Status404 = Loader(lazy(() => import('src/views/pages/Status/Status404')))

const InvitePage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue, remove] = useLocalStorage('my-key', 'foo');
  const val = searchParams.get('ref') || ''
  // Save to localStorage
  console.log('Referral Address: ',val)
  setValue(val)
  return (
    <Navigate to='/dashboard' replace />
  )

}

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: (
        <Navigate
          to="/dashboard"
          replace
        />)
      },
      {
        path: '/invite',
        element: <InvitePage />
      },
      {
        path: '*',
        element: <Status404 />
      },
    ]
  },
  {
    path: 'dashboard',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: 'contribute',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: <Contribute />
      }
    ]
  },
  {
    path: 'transactions',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Transactions />
        )
      }
    ]
  },
  {
    path: 'referrals',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Referrals />
        )
      }
    ]
  },
  {
    path: 'airdrop',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Airdrop />
        )
      },
      {
        path: 'redeem',
        element: <RedeemPage />
      },
    ]
  }
];

export default routes;
