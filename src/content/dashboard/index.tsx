import { Link } from "react-router-dom";
import { Box, Card, Grid, Container, Typography, Button } from "@mui/material";
import PageTitleWrapper from "src/components/PageTitleWrapper";

function PageHeader() {

  return (
    <Grid container alignItems="center">
      <Grid item>
      </Grid>
      <Grid item>
        <Typography variant="h2" component="h2" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="subtitle2">
          Ogasaswap is Africa's first decentralized cross-chain platform that
          gives rewards. You can make contributions to the project by using this
          platform.
        </Typography>
      </Grid>
    </Grid>
  );
}

function DashboardCrypto() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            {/* <AccountBalance /> */}
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Box p={4}>
                <Typography variant="h3" gutterBottom>
                  On-chain Referrals
                </Typography>
                <Typography variant="subtitle2">
                  We know you love FREE stuff, and so do your friends. Invite your friends and get FREE $OGASA tokens when they participate in the token sale. Bonus
                  tokens are sent automatically to your wallet. There is NO limit to the number of referrals you can have. The more referrals you have, the more tokens you earn! Hurry now while stock last.
                </Typography>
                <Grid sm item pt={2}>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/referrals"
                  >
                    Start Here
                  </Button>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashboardCrypto;
