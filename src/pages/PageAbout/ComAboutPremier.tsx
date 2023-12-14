import { Container, Grid } from "@mui/material";
import img from "./image_about.png";
import data from "./data_about.json";

export default function ComAboutPremier() {
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
            <h1 style={{ color: "#fff" }}>Your Premier 3D Design Partner</h1>
            {data.AboutText.map((t, i) => {
              return (
                <h2 key={`${i}`} style={{ color: "#fff", textAlign: "start" }}>
                  {t}
                </h2>
              );
            })}
          </Container>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={img} style={{ width: "100%" }} alt=""></img>
        </Grid>
      </Grid>
    </>
  );
}
