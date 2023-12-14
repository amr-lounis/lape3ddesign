import { Container, Grid } from "@mui/material";
import img from "./image_about.png";
import data from "./data_about.json";

export default function ComAboutServices() {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Grid item md={8}>
          <Container>
            <h1 style={{ color: "#fff" }}>SERVICES</h1>
            {data.Services.map((t, i) => {
              return (
                <h2 key={`${i}`} style={{ color: "#fff", textAlign: "start" }}>
                  {t}
                </h2>
              );
            })}
          </Container>
        </Grid>
        <Grid item xs={4}>
          <img src={img} style={{ width: "100%" }} alt=""></img>
        </Grid>
      </Grid>
    </>
  );
}
