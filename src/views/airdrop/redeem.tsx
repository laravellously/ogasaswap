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
  Typography
} from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import { styled } from '@mui/material/styles';

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
  return (
    <>
      <Helmet>
        <title>Airdrop | Ogasaswap</title>
      </Helmet>
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
                  primary="5.00 BUSD"
                  secondary="Get 100 + extra 50 $OGASA"
                />
                <Button size="small" variant="outlined">
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
                  primary="10.00 BUSD"
                  secondary="Get 200 + extra 75 $OGASA"
                />
                <Button size="small" variant="outlined">
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
                  primary="20.00 BUSD"
                  secondary="Get 400 + extra 180 $OGASA"
                />
                <Button size="small" variant="outlined">
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
                  primary="50.00 BUSD"
                  secondary="Get 1,000 plus extra 400 $OGASA"
                />
                <Button size="small" variant="outlined">
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
                  primary="100.00 BUSD"
                  secondary="Get 2,000 plus extra 650 $OGASA"
                />
                <Button size="small" variant="outlined">
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
