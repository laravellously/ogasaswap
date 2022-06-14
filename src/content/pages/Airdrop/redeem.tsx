import { useState } from 'react';
import { useNavigate } from 'react-router';
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
import { useAccount, useSigner } from 'wagmi';
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
          Tokens are sent automatically to your wallet according to the tokenomics.
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
    '0x4866012Dd29FD7a69Be886398259Dcbc9aE1E2f7',
    OgasaDropContractInterface,
    signer
  ) as OgasaDrop;

  const handleClose = () => {
    setOpen(false);
    setErrorMsg('');
  };

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
      await OgasaDropContract.participate(userAcc, {
        value: ethers.utils.parseEther(amount)
      });
      setErrorMsg(
        'Thank you for participating in our airdrop.'
      );
      setOpen(true);
      setLoading(false)
      setBtnDisabled(false)
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
                    primary="0.0167 BNB"
                    secondary="Get 15 + extra 15 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.016666666666')}
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
                    primary="0.033 BNB"
                    secondary="Get 30 + extra 30 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.016666666666')}
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
                    primary="0.00075 BNB"
                    secondary="Get 400 + extra 180 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.016666666666')}
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
                    primary="0.0015 BNB"
                    secondary="Get 1,000 plus extra 400 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.016666666666')}
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
                    primary="0.0025 BNB"
                    secondary="Get 2,000 plus extra 650 $OGASA"
                  />
                  <LoadingButton
                    size="small"
                    variant="outlined"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => redeemFunc('0.016666666666')}
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
