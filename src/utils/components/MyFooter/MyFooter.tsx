import { Container, Grid, Typography } from "@mui/material";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

export default function Footer({ urls }) {
  return (
    <>
      <Container sx={{ backgroundColor: "#FFFFFF" }} maxWidth={false}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {urls.footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                {footer.description.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      style={{
                        fontSize: "1rem",
                        color: "#555",
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright urls={urls}></Copyright>
      </Container>
    </>
  );
}
