import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { WagmiConfig, createClient as createWagmiClient, Chain } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { getDefaultProvider, providers } from 'ethers';
import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

const chains: Chain[] = [
  {
    id: 56,
    name: 'Binance Smart Chain',
    network: 'bsc',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: {
      default: 'https://bsc-dataseed.binance.org',
      default2: 'https://bsc-dataseed1.defibit.io/',
      default3: 'https://bsc-dataseed1.ninicoin.io/'
    },
    blockExplorers: {
      etherscan: {
        name: 'BNB Smart Chain Explorer',
        url: 'https://bscscan.com'
      },
      default: {
        name: 'BNB Smart Chain Explorer',
        url: 'https://bscscan.com'
      }
    },
    testnet: false
  },
  {
    id: 97,
    name: 'Binance Testnet Chain',
    network: 'bsctestnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: {
      default: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
      default2: 'https://data-seed-prebsc-1-s3.binance.org:8545',
      default3: 'https://data-seed-prebsc-2-s2.binance.org:8545/'
    },
    blockExplorers: {
      etherscan: {
        name: 'BNB Testnet Chain Explorer',
        url: 'https://testnet.bscscan.com'
      },
      default: {
        name: 'BNB Testnet Chain Explorer',
        url: 'https://testnet.bscscan.com'
      }
    },
    testnet: true
  }
];

const coinbaseWalletConnector = ({
  chainId
}: {
  chainId?: number | undefined;
}) =>
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: 'wagmi',
      chainId: chainId,
      jsonRpcUrl: 'https://data-seed-prebsc-2-s2.binance.org:8545/'
    }
  });

const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: true
  }
});

const walletConnectConnector = ({
  chainId
}: {
  chainId?: number | undefined;
}) =>
  new WalletConnectConnector({
    chains,
    options: {
      chainId,
      qrcode: true
    }
  });

const connectors = (config: { chainId?: number | undefined }) => {
  return [
    injectedConnector,
    coinbaseWalletConnector(config),
    // metaMaskConnector,
    walletConnectConnector(config)
  ];
};

const provider = ({ chainId }: { chainId?: number | undefined }): any => {
  // return getDefaultProvider();
  const jsonRpcProvider = new providers.JsonRpcProvider(
    'https://data-seed-prebsc-2-s2.binance.org:8545/',
    chainId
  );
  return jsonRpcProvider;
};

const client = createWagmiClient({
  autoConnect: true,
  connectors,
  provider
});

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <WagmiConfig client={client}>
          <App />
        </WagmiConfig>
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
