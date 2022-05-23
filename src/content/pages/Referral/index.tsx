import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  CardHeader,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  useTheme,
  Snackbar,
  Container,
  Button,
  CardContent
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import { useConnect, useAccount } from 'wagmi';
import useCopyToClipboard from 'src/hooks/useCopyToClipboard';
import { TokenContract } from 'src/utils/contract';


const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const ReferralCard = () => {
  const [open, setOpen] = useState(false);
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const { isConnected } = useConnect();
  const { data: account } = useAccount();

  const handleClick = () => {
    copyToClipboard('https://ogasaswap.vercel.app/invite?ref=' + account.address)
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Box pb={2}>
        <Typography variant="h3" gutterBottom>
          On-chain Referrals
        </Typography>
        <Typography variant="subtitle2">
          Invite your friends and get FREE tokens when they join. Bonus tokens
          are sent automatically to your wallet.
        </Typography>
        <Typography variant="h5">
          There is NO limit to the number of referrals you can have. The more
          referrals you have, the more tokens you earn!
        </Typography>
      </Box>
      <Card>
        <List>
          <ListItem sx={{ p: 1 }}>
            <ListItemAvatar sx={{ pr: 2 }}>
              <AvatarSuccess>
                <LinkTwoToneIcon />
              </AvatarSuccess>
            </ListItemAvatar>
            {!isConnected && (
              <>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="Referral Link"
                  secondary="Connect wallet to view your referral link"
                />
              </>
            )}
            {isConnected && (
              <>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    lineHeight: 1
                  }}
                  primary="Referral Link"
                  secondary={
                    'https://ogasaswap.vercel.app/invite?ref=' + account.address
                  }
                />
                <Box pl={1} component="span">
                  <Button
                    sx={{ margin: 1 }}
                    variant="contained"
                    size="small"
                    color="primary"
                    startIcon={<ContentCopyTwoToneIcon />}
                    onClick={async () => {
                      console.log(await TokenContract.decimals())
                    }}
                  >
                    Copy
                  </Button>

                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Copied to clipboard"
                  />
                </Box>
              </>
            )}
          </ListItem>
        </List>
      </Card>
    </>
  );
};

const ReferralTable = () => {
  const theme = useTheme();

  return <></>;
};

const ReferralPage = () => {
  return (
    <>
    <Helmet>
        <title>Referrals - Ogasaswap</title>
      </Helmet>
      <Container sx={{ my: 3 }} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ReferralCard />
          </Grid>
          <Grid item xs={12}>
            <ReferralTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ReferralPage;
