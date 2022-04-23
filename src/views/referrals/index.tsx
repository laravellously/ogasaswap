/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, MouseEvent, ChangeEvent } from 'react';
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
  TablePagination,
  TableRow,
  TableContainer,
  useTheme,
  Snackbar,
  Container,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import minify from 'url-minify';
import { format, subHours, subWeeks, subDays } from 'date-fns';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const ReferralCard = () => {
  const copyValue = 'https://is.gd/o5r7Lg';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setCopied(true);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setCopied(false);
    setOpen(false);
  };

  return (
    <>
      <Box pb={2}>
        <Typography variant="h3" gutterBottom>On-chain Referrals</Typography>
        <Typography variant="subtitle2">
          Invite your friends and get FREE tokens when they participate in the
          OGASA Crowdsale. Bonus tokens are sent automatically to your wallet.
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
            <ListItemText
              primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
              secondaryTypographyProps={{
                variant: 'subtitle2',
                lineHeight: 1
              }}
              primary="Referral Link"
              secondary={copyValue}
            />
            <Box pl={1} component="span">
              <CopyToClipboard text={copyValue} onCopy={handleClick}>
                <Button
                  sx={{ margin: 1 }}
                  variant="contained"
                  size="small"
                  color="primary"
                  startIcon={<ContentCopyTwoToneIcon />}
                >
                  Copy
                </Button>
              </CopyToClipboard>

              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Copied to clipboard"
              />
            </Box>
          </ListItem>
        </List>
      </Card>
    </>
  );
};

const ReferralTable = () => {
  const theme = useTheme();
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const logs = [
    {
      id: 1,
      wallet: '0xBb053e . . . f2b56565',
      date: subDays(new Date(), 2).getTime()
    },
    {
      id: 2,
      wallet: '0xafE295 . . . Cee1d794',
      date: subDays(new Date(), 6).getTime()
    },
    {
      id: 3,
      wallet: '0x4C403F . . . e0adfcea',
      date: subHours(new Date(), 15).getTime()
    },
    {
      id: 4,
      wallet: '0xE2Ff03 . . . 229fFD14',
      date: subDays(new Date(), 4).getTime()
    },
    {
      id: 5,
      wallet: '0x93FDD8 . . . 12908deE',
      date: subWeeks(new Date(), 3).getTime()
    }
  ];

  return (
    <Card>
      <CardHeader
        subheaderTypographyProps={{}}
        titleTypographyProps={{}}
        title="Referral List"
        subheader="View your on-chain referrals"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Wallet</TableCell>
              <TableCell>Date/Time</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id} hover>
                <TableCell>{log.wallet}</TableCell>
                <TableCell>
                  {format(log.date, 'dd MMMM, yyyy - h:mm:ss a')}
                </TableCell>
                <TableCell align="right">
                  <Tooltip placement="top" title="View on BscScan" arrow>
                    <IconButton
                      sx={{
                        '&:hover': {
                          background: theme.colors.error.lighter
                        },
                        color: theme.palette.error.main
                      }}
                      color="inherit"
                      size="small"
                    >
                      <VisibilityTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const ReferralPage = () => {
  return (
    <>
      <Helmet>
        <title>Referrals | Ogasaswap</title>
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
