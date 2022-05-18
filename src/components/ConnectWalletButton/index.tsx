import { Button, Snackbar } from '@mui/material';
import { useEthers } from '@usedapp/core';
import { useState, useEffect } from 'react';
import Web3Modal from 'web3modal'
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import WalletConnectProvider from '@walletconnect/web3-provider'

const ConnectWalletButton = (children: any) => {
  const { activate, account, switchNetwork, chainId, error } =
    useEthers();
  const [activateError, setActivateError] = useState('');
  const [openSnack, setSnackOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setActivateError(error.message);
      setSnackOpen(true);
    }
  }, [error]);

  if (account && chainId !== 97) switchNetwork(97);

  const handleSnackClose = (): void => {
    setSnackOpen(false);
  };

  return (
    <>
      {!account && (
        <>
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              setActivateError('');
              // activateProvider()
            }}
            startIcon={<AccountBalanceWalletTwoToneIcon />}
          >
            Connect Wallet
          </Button>
          <Snackbar
            open={openSnack}
            autoHideDuration={4000}
            onClose={handleSnackClose}
            message={activateError}
          />
        </>
      )}
      {account && (<>{children}</>)}
    </>
  );
};

export default ConnectWalletButton;
