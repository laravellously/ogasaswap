import { Suspense, lazy } from "react";
import { useRoutes, Navigate, useSearchParams, Route, Routes } from 'react-router-dom';
// import routes from './router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import { ethers } from "ethers";

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const ReferralPage = Loader(lazy(() => import("src/content/pages/Referral")));
const AirdropPage = Loader(lazy(() => import("src/content/pages/Airdrop")));
const RedeemAirdropPage = Loader(lazy(() => import("src/content/pages/Airdrop/redeem")));
const Status404 = Loader(lazy(() => import("src/content/pages/Status/Status404")));
const Status500 = Loader(lazy(() => import("src/content/pages/Status/Status500")));

const InvitePage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const val = searchParams.get("ref") || "";
  // Save to localStorage
  console.log("Referral Address: ", val);
  console.log(ethers.utils.isAddress(val))
  localStorage.setItem('ref',val)
  return <Navigate to="/" replace />;
};

const TestPage = () => {
  return <h1>Welcome to Test Page</h1>;
};


const App = () => {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<TestPage />} />
            <Route path="referrals" element={<ReferralPage />} />
            <Route path="airdrop" element={<AirdropPage />} />
            <Route path="redeem" element={<RedeemAirdropPage />} />
            <Route path="invite" element={<InvitePage />} />
          </Route>
          <Route element={<BaseLayout />}>
            <Route path="*" element={<Status404 />} />
            <Route path="/error-500" element={<Status500 />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
