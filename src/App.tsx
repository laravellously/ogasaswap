import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const AirdropPage = Loader(lazy(() => import("src/content/pages/Airdrop")));
const RedeemAirdropPage = Loader(lazy(() => import("src/content/pages/Airdrop/redeem")));
const Status404 = Loader(lazy(() => import("src/content/pages/Status/Status404")));
const Status500 = Loader(lazy(() => import("src/content/pages/Status/Status500")));

const App = () => {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<AirdropPage />} />
            <Route path="redeem" element={<RedeemAirdropPage />} />
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
