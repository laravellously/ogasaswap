import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Snackbar,
  Typography
} from '@mui/material';
import Jazzicon from 'react-jazzicon';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
// import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import { addressToSeed, shortenString } from 'src/utils/common';
import { blue } from '@mui/material/colors';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.success.dark};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserbox() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [activateError, setActivateError] = useState('');
  const [openSnack, setSnackOpen] = useState(false);

  const { data: account } = useAccount();
  const {
    connect,
    connectors,
    isConnected,
    error,
    isConnecting,
    pendingConnector
  } = useConnect();
  const { disconnect } = useDisconnect();
  const {
    activeChain,
    chains,
    isLoading,
    pendingChainId,
    switchNetwork,
    error: networkError
  } = useNetwork();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleDialogClose = (): void => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (error) {
      setActivateError(error.message);
      setSnackOpen(true);
    }
  }, [error]);

  useEffect(() => {
    if (networkError) {
      disconnect();
      setActivateError(networkError.message);
      setSnackOpen(true);
    }
  }, [networkError]);

  useEffect(() => {
    if (isConnected && activeChain?.unsupported && switchNetwork) {
    }
    switchNetwork(97);
  }, [isConnected, activeChain]);

  const handleSnackClose = (): void => {
    setSnackOpen(false);
  };

  return (
    <>
      <Snackbar
        open={openSnack}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        autoHideDuration={4000}
        onClose={handleSnackClose}
        message={activateError}
      />
      {!isConnected && (
        <>
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            size="large"
            color="primary"
            onClick={() => {
              setActivateError('');
              setDialogOpen(true);
              // connect(connectors[0]);
            }}
          >
            Connect Wallet
          </Button>
          <Dialog
            open={isDialogOpen}
            onClose={handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Connect Wallet'}
            </DialogTitle>
            {connectors.map((x) => (
              <ListItem
                button
                disabled={!x.ready}
                key={x.id}
                onClick={() => connect(x)}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={x.name}
                  secondary={
                    isConnecting &&
                    pendingConnector?.id === x.id &&
                    ' (connecting)'
                  }
                />
              </ListItem>
            ))}
          </Dialog>
        </>
      )}
      {isConnected && (
        <>
          <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
            <Jazzicon diameter={40} seed={addressToSeed(account?.address)} />
            <Hidden mdDown>
              <UserBoxText>
                {isLoading && pendingChainId === 97 && (
                  <UserBoxLabel variant="body1">Switching</UserBoxLabel>
                )}
                {!isLoading && (
                  <UserBoxLabel variant="body1">Connected</UserBoxLabel>
                )}
                <UserBoxDescription variant="body2">
                  {shortenString(account?.address)}
                </UserBoxDescription>
              </UserBoxText>
            </Hidden>
            <Hidden smDown>
              <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
            </Hidden>
          </UserBoxButton>
          <Popover
            anchorEl={ref.current}
            onClose={handleClose}
            open={isOpen}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <MenuUserBox sx={{ minWidth: 210 }} display="flex">
              <Jazzicon diameter={40} seed={addressToSeed(account?.address)} />
              <UserBoxText>
                <UserBoxLabel variant="body1">Connected</UserBoxLabel>
                <UserBoxDescription variant="body2">
                  {shortenString(account?.address)}
                </UserBoxDescription>
              </UserBoxText>
            </MenuUserBox>
            <Divider sx={{ mb: 0 }} />
            <List sx={{ p: 1 }} component="nav">
              <ListItem button to="/contribute" component={NavLink}>
                <VerifiedUserTwoToneIcon fontSize="small" />
                <ListItemText primary="Purchase Token" />
              </ListItem>
              <ListItem button to="/referrals" component={NavLink}>
                <AccountTreeTwoToneIcon fontSize="small" />
                <ListItemText primary="Referrals" />
              </ListItem>
              <ListItem button onClick={() => disconnect()}>
                <LockOpenTwoToneIcon fontSize="small" />
                <ListItemText primary="Disconnect Wallet" />
              </ListItem>
            </List>
          </Popover>
        </>
      )}
    </>
  );
}

export default HeaderUserbox;
