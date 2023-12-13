import { Container, Grid, Link, Typography } from "@mui/material";
import Copyright from "./Copyright";
import { footers } from "./dataFooter";
import { Link as LinkRoute } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Container sx={{ backgroundColor: "#FFFFFF" }} maxWidth={false}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.name}>
                    <LinkRoute to={item.to}>
                      <Link variant="subtitle1" color="text.secondary">
                        {item.name}{" "}
                      </Link>
                    </LinkRoute>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
