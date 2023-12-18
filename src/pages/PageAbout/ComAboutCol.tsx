import { Container, Grid } from "@mui/material";
//
export default function ComAboutCol({ title, descriptions }) {
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
        <h1 style={{ color: "#fff" }}>{title}</h1>
        <Grid container sx={{ justifyContent: "space-between" }}>
          {descriptions.map((t, i) => {
            return (
              <Grid key={i} item sm={12} md={5} lg={3} sx={{ m: 1 }}>
                <h1 style={{ color: "#FFF" }}>{i + 1}</h1>
                <h2 key={i} style={{ color: "#fff", textAlign: "start" }}>
                  {t}
                </h2>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
