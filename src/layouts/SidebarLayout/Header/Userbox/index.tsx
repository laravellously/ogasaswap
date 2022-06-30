import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Hidden,
  IconButton,
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
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
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

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const WalletDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

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
      setDialogOpen(false);
      setSnackOpen(true);
    }
  }, [error]);

  useEffect(() => {
    if (networkError) {
      disconnect();
      setActivateError(networkError.message);
      setDialogOpen(false);
      setSnackOpen(true);
    }
  }, [networkError]);

  useEffect(() => {
    if (isConnected && activeChain.id != 56 && switchNetwork)
      switchNetwork(56);
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
            <WalletDialogTitle
              id="alert-dialog-title"
              onClose={handleDialogClose}
            >
              {'Connect Wallet'}
            </WalletDialogTitle>
            {connectors.map((x) => (
              <ListItem
                button
                // disabled={!x.ready}
                key={x.id}
                onClick={() => connect(x)}
                sx={{ p: 2 }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{ bgcolor: blue[100], color: blue[600] }}
                    src={x.id == 'coinbaseWallet'
                    ? '/static/providers/logos/coinbasewallet.svg'
                    : x.id == 'injected'
                    ? '/static/providers/logos/metamask.svg'
                    : '/static/providers/logos/walletconnect.svg'}
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography gutterBottom variant="h4" component="div">
                      {x.name}
                    </Typography>
                  }
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
