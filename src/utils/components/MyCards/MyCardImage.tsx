import { Container, Card, Box, Grid, Paper } from "@mui/material";

export default function MyCardImage({ img, children }) {
  return (
    <Container
      sx={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Card>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {children}
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={5}
            md={5}
            sx={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "dark"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "70%",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Card>
    </Container>
  );
}
