import { useState } from 'react';
import {
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  Button,
  Container,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import { styled } from '@mui/material/styles';
import { ethers } from 'ethers';
import { useAccount, useContractWrite, useSigner } from 'wagmi';
import OgasaDropContractAbi from 'src/contracts/OgasaDrop.json';
import type { OgasaDrop } from 'src/types/OgasaDrop';
import LoadingButton from '@mui/lab/LoadingButton';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" gutterBottom>
          Redeem Airdrop
        </Typography>
        <Typography variant="subtitle2">
          To redeem your airdrop, purchase OGASA and get extra bonus tokens.
          Tokens are sent automatically to your wallet according to the tokenomics. To view your $OGASA balance, import this following address into your wallet: 
        </Typography>
        <Typography variant="h5">
          Airdrops can ONLY be redeemed once.
        </Typography>
      </Grid>
    </Grid>
  );
}

const RedeemPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [disabled, setBtnDisabled] = useState(false)
  const [errorMsg, setErrorMsg] = useState('');
  const { data: account } = useAccount();

  const OgasaDropContractInterface = new ethers.utils.Interface(
    OgasaDropContractAbi.abi
  );
  const { data: signer } = useSigner();

  const OgasaDropContract = new ethers.Contract(
    '0xd3D61c0e2d65B8a9d1Dbe638433E9A139d537306',
    OgasaDropContractInterface,
    signer
  ) as OgasaDrop;

  const handleClose = () => {
    setOpen(false);
    setErrorMsg('');
  };

  const { data: contractData, write } = useContractWrite(
    {
      addressOrName: '0xd3D61c0e2d65B8a9d1Dbe638433E9A139d537306',
      contractInterface: OgasaDropContractInterface,
    },
    'participate',
    {
      onSuccess(data: any) {
        console.log('Success', data)
        setErrorMsg(
          'Thank you for participating in our airdrop.'
        );
        setOpen(true);
        setLoading(false)
        setBtnDisabled(false)
      },
      onError(error: any) {
        console.log('An error occured: ', error)
        setErrorMsg(
          'Oops! An error occured.'
        );
        setOpen(true);
        setLoading(false)
        setBtnDisabled(false)
      },
    }
  )

  const redeemFunc = async (amount: string) => {
    setLoading(true)
    setBtnDisabled(true)
    const userAcc = account ? account.address : ''
    if (!account) {
      setErrorMsg('You need to connect your wallet first.');
      setOpen(true);
      setLoading(false)
      setBtnDisabled(false)
      return;
    }
    const claimed = await OgasaDropContract.userHasClaimed(userAcc)
    if(claimed) {
      setErrorMsg('You have already claimed your airdrop.');
      setOpen(true);
      setLoading(false)
      setBtnDisabled(false)
      return;
    }
    try {
      // await OgasaDropContract.participate(userAcc, {
      //   value: ethers.utils.parseEther(amount)
      // });
      write({
        args: userAcc,
        overrides: {
          value:  ethers.utils.parseEther(amount),
        }
      })
    } catch (e: any) {
      setErrorMsg('An Error Occured: ' + e.message);
      setOpen(true);
      setLoading(false)
      setBtnDisabled(false)
    }
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Notification'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container sx={{ mb: 3 }} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <List>
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.0225 BNB ($5)"
                    secondary="Get 50 + extra 50 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.0225')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.045 BNB ($10)"
                    secondary="Get 100 + extra 100 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.045')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.065 BNB ($15)"
                    secondary="Get 150 + extra 150 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.065')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.09 BNB ($20)"
                    secondary="Get 200 plus extra 200 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.09')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.1125 BNB ($25)"
                    secondary="Get 250 plus extra 250 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.1125')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.135 BNB ($30)"
                    secondary="Get 300 + extra 300 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.135')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.18 BNB ($40)"
                    secondary="Get 400 + extra 400 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.18')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.225 BNB ($50)"
                    secondary="Get 500 + extra 500 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.225')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.45 BNB ($100)"
                    secondary="Get 1000 + extra 1000 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.45')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="0.9 BNB ($200)"
                    secondary="Get 2000 + extra 2000 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.9')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="2.25 BNB ($500)"
                    secondary="Get 5000 + extra 5000 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('2.25')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
                <Divider component="li" />
                <ListItem sx={{ p: 3 }}>
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <AvatarSuccess>
                      <AddTaskTwoToneIcon />
                    </AvatarSuccess>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5',
                      gutterBottom: true
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      lineHeight: 1
                    }}
                    primary="4.5 BNB ($1000)"
                    secondary="Get 10000 + extra 10000 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('4.5')}
                  >
                    Choose
                  </LoadingButton>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RedeemPage;
