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
  Alert,
  AlertTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import { styled } from '@mui/material/styles';
// import { AirdropContract } from '@/utils/contract'
import { useEthers } from '@usedapp/core';
import { parseEther } from 'ethers/lib/utils';
import React from 'react';
import { useNavigate } from 'react-router';

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
          Bonus tokens are sent automatically to your wallet.
        </Typography>
        <Typography variant="h5">Airdrops can ONLY be redeemed once.</Typography>
      </Grid>
    </Grid>
  );
}

const RedeemPage = () => {
  const [open, setOpen] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('')

  const handleClose = () => {
    setOpen(false);
    setErrorMsg('')
  };

  const { account } = useEthers()
  const navigate = useNavigate()
  
  const redeemFunc = async (amount: string) => {
    if(!account) { 
      setErrorMsg('You need to connect your wallet first.')
      setOpen(true)
      return;
    }
    const userAcc = account ? account : ''
    try{
      // await AirdropContract.createVestingSchedule(userAcc, Date.now(), 0, 3600, 360, false, parseEther(amount))
      // await AirdropContract.participate(userAcc, {value: parseEther(amount)})
      navigate('/transactions')
    } catch(e: any) {
      setErrorMsg("An Error Occured: "+e.message)
      setOpen(true)
    }
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error"}
        </DialogTitle>
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
      <Container sx={{ my: 3 }} maxWidth="lg">
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
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="0.00020 BNB"
                  secondary="Get 100 + extra 50 $OGASA"
                />
                <Button size="small" variant="outlined" onClick={() => redeemFunc("0.00020")}>
                  Choose
                </Button>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <AvatarSuccess>
                    <AddTaskTwoToneIcon />
                  </AvatarSuccess>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="0.00035 BNB"
                  secondary="Get 200 + extra 75 $OGASA"
                />
                <Button size="small" variant="outlined" onClick={() => redeemFunc("0.00035")}>
                  Choose
                </Button>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <AvatarSuccess>
                    <AddTaskTwoToneIcon />
                  </AvatarSuccess>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="0.00075 BNB"
                  secondary="Get 400 + extra 180 $OGASA"
                />
                <Button size="small" variant="outlined" onClick={() => redeemFunc("0.00075")}>
                  Choose
                </Button>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <AvatarSuccess>
                    <AddTaskTwoToneIcon />
                  </AvatarSuccess>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="0.0015 BNB"
                  secondary="Get 1,000 plus extra 400 $OGASA"
                />
                <Button size="small" variant="outlined" onClick={() => redeemFunc("0.0015")}>
                  Choose
                </Button>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ p: 3 }}>
                <ListItemAvatar sx={{ pr: 2 }}>
                  <AvatarSuccess>
                    <AddTaskTwoToneIcon />
                  </AvatarSuccess>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="0.0025 BNB"
                  secondary="Get 2,000 plus extra 650 $OGASA"
                />
                <Button size="small" variant="outlined" onClick={() => redeemFunc("0.0025")}>
                  Choose
                </Button>
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
