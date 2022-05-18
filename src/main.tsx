import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "nprogress/nprogress.css";
import { SidebarProvider } from "./contexts/SidebarContext";
import { DAppProvider, Config, Hardhat } from "@usedapp/core";

(window.global as any) = globalThis

const config: Config = {
  networks: [Hardhat],
  readOnlyChainId: Hardhat.chainId,
  readOnlyUrls: {
    [Hardhat.chainId]: 'http://127.0.0.1:8545'
  },
  multicallAddresses: {
    '31337': '0x9a9f2ccfde556a7e9ff0848998aa4a0cfd8863ae'
  },
  autoConnect: true
};

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <DAppProvider config={config}>
          <App />
        </DAppProvider>
      </BrowserRouter>
    </SidebarProvider>
    </React.StrictMode>,
  document.getElementById('root')
);