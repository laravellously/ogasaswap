import { Typography, Grid } from "@mui/material";
import Jazzicon from "react-jazzicon";

function PageHeader() {

  return (
    <Grid container alignItems="center">
      <Grid item>
        {/* {account && (
          <Jazzicon diameter={40} seed={jsNumberForAddress(account)} />
        )} */}
        {/* <Avatar
          sx={{ mr: 2, width: theme.spacing(8), height: theme.spacing(8) }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        /> */}
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="subtitle2">
          Ogasaswap is Africa's first decentralized cross-chain platform that
          gives rewards. You can make contributions to the project using this
          platform.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
