import {
  CardMedia,
  Typography,
  Card,
  Button,
  CardActions,
  Grid,
  Container,
  CardContent,
} from "@mui/material";
import PageTitleWrapper from "@/components/PageTitleWrapper";
import { ShareButton } from "@/components/ShareButton"

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" gutterBottom>
          $OGASA Airdrop
        </Typography>
        <Typography variant="subtitle2">
          To participate in $OGASA airdrop, share any ONE of the creatives below
          to twitter using the hashtag: #ogasaswap.
        </Typography>
        <Typography variant="h5">You can ONLY participate once.</Typography>
      </Grid>
    </Grid>
  );
}

const AirdropPage = () => {

  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container sx={{ my: 3 }} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 240 }}
                image="/public/images/placeholders/covers/6.jpg"
                title="Airdrop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  $OGASA Airdrop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Participate in the $OGASA airdrop and earn rewards. Be a part
                  of the FIRST Cross-chain DEX Platform in Africa. #ogasaswap
                </Typography>
              </CardContent>
              <CardActions>
                <ShareButton />
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 240 }}
                image="/public/images/placeholders/covers/6.jpg"
                title="Airdrop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  $OGASA Airdrop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Participate in the $OGASA airdrop and earn rewards. Be a part
                  of the FIRST Cross-chain DEX Platform in Africa. #ogasaswap
                </Typography>
              </CardContent>
              <CardActions>
                <ShareButton />
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 240 }}
                image="/public/images/placeholders/covers/6.jpg"
                title="Airdrop"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  $OGASA Airdrop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Participate in the $OGASA airdrop and earn rewards. Be a part
                  of the FIRST Cross-chain DEX Platform in Africa. #ogasaswap
                </Typography>
              </CardContent>
              <CardActions>
                <ShareButton />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* {addScript('https://twitter.com/share?ref_src=twsrc%5Etfw')} */}
    </>
  );
};

export default AirdropPage;
