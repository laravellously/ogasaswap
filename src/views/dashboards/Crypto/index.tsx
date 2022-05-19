import PageHeader from "./PageHeader";
import PageTitleWrapper from "@/components/PageTitleWrapper";
import { Box, Card, Grid, Container, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import AccountBalance from "./AccountBalance";

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
            <AccountBalance />
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
                    component={RouterLink}
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
