import { useState, MouseEvent, ChangeEvent } from "react";
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
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LinkTwoToneIcon from "@mui/icons-material/LinkTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
// import { format, subHours, subWeeks, subDays } from "date-fns";
import {
  useEthers,
  shortenAddress,
  useTransactions,
  useContractFunction,
} from "@usedapp/core";
import { useCopyToClipboard } from "react-use";
import { CrowdsaleContract, TokenContract } from "@/utils/contract";
import minify from "@/utils/minify";

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const ReferralCard = () => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [refLink, setRefLink] = useState("");
  const [state, copyToClipboard] = useCopyToClipboard();
  const { account } = useEthers();

  const handleClick = () => {
    setCopied(true);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setCopied(false);
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
            {!account && (
              <>
                <ListItemText
                  primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: "subtitle2",
                    lineHeight: 1,
                  }}
                  primary="Referral Link"
                  secondary="Connect Wallet to view referral link"
                />
              </>
            )}
            {account && (
              <>
                <ListItemText
                  primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                  secondaryTypographyProps={{
                    variant: "subtitle2",
                    lineHeight: 1,
                  }}
                  primary="Referral Link"
                  secondary={refLink ? refLink : "Get your referral link"}
                />
                <Box pl={1} component="span">
                  {refLink ? (
                    <>
                      <Button
                        sx={{ margin: 1 }}
                        variant="contained"
                        size="small"
                        color="primary"
                        startIcon={<ContentCopyTwoToneIcon />}
                      >
                        Copy
                      </Button>

                      <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Copied to clipboard"
                      />
                    </>
                  ) : (
                    <Button
                      sx={{ margin: 1 }}
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={async () => {
                        let link = await CrowdsaleContract.getRefLink();
                        // const minify = async () => {
                          const url =
                            "https://sales.ogasaswap.com/invite?ref=" + account;
                        //   const resp = await fetch(
                        //     "https://is.gd/create.php?format=simple&url=" + url,
                        //     {
                        //       mode: "no-cors",
                        //       headers: {
                        //         "Content-Type": "text/html",
                        //       },
                        //     }
                        //   );
                        //   console.log(resp.);
                        //   return resp;
                        // };
                        console.log("> Link: " + link);
                        if (
                          link ==
                          "0x0000000000000000000000000000000000000000000000000000000000000000"
                        )
                          // link = await minify();
                          // setRefLink(link)
                          console.log("> Shortened Link: " + (await minify("https://is.gd/create.php?format=simple&url=" + url, {provider: 'isgd'})));
                      }}
                    >
                      Get Link
                    </Button>
                  )}
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
  const { transactions } = useTransactions();

  return (
    <>
      {transactions.length > 0 ? (
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
                {transactions.map((tx) => (
                  <TableRow key={tx.transaction.hash} hover>
                    <TableCell>{shortenAddress(tx.transaction.hash)}</TableCell>
                    <TableCell>
                      {/* {format(log.date, "dd MMMM, yyyy - h:mm:ss a")} */}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip placement="top" title="View on BscScan" arrow>
                        <IconButton
                          sx={{
                            "&:hover": {
                              background: theme.colors.error.lighter,
                            },
                            color: theme.palette.error.main,
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
      ) : (
        <Card>
          <CardContent>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
              noWrap
            >
              No data yet
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

const ReferralPage = () => {
  return (
    <>
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
