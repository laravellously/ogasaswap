import { Route, Routes, useRoutes } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ThemeProvider from "./theme/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { Suspense, lazy } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useLocalStorage } from "react-use";
import SidebarLayout from "@/layouts/SidebarLayout";
import SuspenseLoader from "@/components/SuspenseLoader";
import BaseLayout from "@/layouts/BaseLayout";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// const Home = Loader(lazy(() => import('@/views/dashboards/Crypto')))
// const ReferralPage = Loader(lazy(() => import("@/views/referrals")));
// const AirdropPage = Loader(lazy(() => import("@/views/airdrop")));
// const RedeemAirdropPage = Loader(lazy(() => import("@/views/airdrop/redeem")));
const Status404 = Loader(lazy(() => import("@/views/pages/Status/Status404")));
const Status500 = Loader(lazy(() => import("@/views/pages/Status/Status500")));

const InvitePage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");
  const val = searchParams.get("ref") || "";
  // Save to localStorage
  console.log("Referral Address: ", val);
  setValue(val);
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
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<TestPage />} />
            {/* <Route path="referrals" element={<ReferralPage />} />
            <Route path="airdrop" element={<AirdropPage />} />
            <Route path="redeem" element={<RedeemAirdropPage />} /> */}
          </Route>
          <Route element={<BaseLayout />}>
            <Route path="*" element={<Status404 />} />
            <Route path="/error-500" element={<Status500 />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
