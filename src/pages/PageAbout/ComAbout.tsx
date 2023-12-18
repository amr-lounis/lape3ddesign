import { Container, Grid } from "@mui/material";
//
export default function ComAbout({ title, descriptions, img }) {
  return (
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
          <h1 style={{ color: "#fff" }}>{title}</h1>
          {descriptions.map((t, i) => {
            return (
              <h2 key={i} style={{ color: "#fff", textAlign: "start" }}>
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
  );
}
