import { Container, Grid } from "@mui/material";
import { urls } from "src/data/App-urls";
import MyCard1 from "src/utils/components/MyCards/MyCard1";

export default function Page() {
  const listStore = [];
  for (let i = 1; i < 14; i++) {
    listStore.push(`${urls.baseUrl}img_store/${i}.png`);
  }
  return (
    <div>
      <Container sx={{}}>
        <Grid container>
          {listStore.map((e, i) => {
            console.log(e);
            return (
              <Grid item sm={10} md={5} lg={4} sx={{ p: 2 }}>
                <MyCard1 key={i} img={e}></MyCard1>;
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
