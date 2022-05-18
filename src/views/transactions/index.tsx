// import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container, Typography, Button, Card } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { subDays } from 'date-fns';
import { CryptoOrder } from '@/models/crypto_order';
import RecentOrdersTable from './table';
import { shortenAddress, useTransactions } from '@usedapp/core';

const orders: CryptoOrder[] = [
  {
    id: '1',
    orderDetails: 'Token Purchase',
    orderDate: subDays(new Date(), 1).getTime(),
    status: 'completed',
    orderID: shortenAddress('0x412c74AcE8c3981aE8E20aEB0528C6900bd07fF8'),
    amountCrypto: 34.4565,
    amount: 56787,
    cryptoCurrency: 'BUSD',
  }
]

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions List
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Buy $OGASA
        </Button>
      </Grid>
    </Grid>
  );
}

const transactionsPage = () => {
  const { transactions } = useTransactions()
  // console.log(transactions)
  return (
    <>
      {/* <Helmet>
        <title>Transactions | OgasaSwap</title>
      </Helmet> */}
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container sx={{ my: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <RecentOrdersTable cryptoOrders={transactions} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default transactionsPage;
