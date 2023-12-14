import { Container, Grid, Button } from "@mui/material";
import img from "./image_about.png";
import data from "./data_about.json";

export default function PageServices() {
  return (
    <div>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item md={8}>
            <h1 style={{ color: "#fff" }}>Your Premier 3D Design Partner</h1>

            <h2 style={{ color: "#fff", textAlign: "start" }}>
              {data.AboutText[0]}
            </h2>
            <h2 style={{ color: "#fff", textAlign: "start" }}>
              {data.AboutText[1]}
            </h2>
            <h2 style={{ color: "#fff", textAlign: "start" }}>
              {data.AboutText[2]}
            </h2>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                p: 10,
              }}
            >
              <Button variant="contained">GET IN TOUCH</Button>
              <Button variant="contained">BECOME A DESIGNER</Button>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <img src={img} style={{ width: "100%" }} alt=""></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
