import { Container, Grid } from "@mui/material";
import data from "./data_about.json";

export default function ComAbout3() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <h1 style={{ color: "#fff" }}>ENGAGE WITH OUR COMMUNITY !</h1>
        <Grid container sx={{ justifyContent: "space-between" }}>
          {data.Engage.map((t, i) => {
            return (
              <>
                <Grid item sm={12} md={5} lg={3} sx={{ m: 1 }}>
                  <h1 style={{ color: "#FFF" }}>{i + 1}</h1>
                  <h2 key={i} style={{ color: "#fff", textAlign: "start" }}>
                    {t}
                  </h2>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
