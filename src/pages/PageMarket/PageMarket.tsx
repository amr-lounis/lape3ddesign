import { Container, Grid } from "@mui/material";
import MyCard1 from "src/utils/components/MyCards/MyCard1";
export default function PageServices() {
  const listStore = [];
  for (let i = 1; i < 14; i++) {
    listStore.push(`/img_store/${i}.png`);
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
