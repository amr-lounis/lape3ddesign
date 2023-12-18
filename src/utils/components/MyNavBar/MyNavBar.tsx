import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
//
const MyNavLink = styled(NavLink)(() => ({
  fontSize: "1.5rem",
  padding: "8px",
  textDecoration: "none",
  color: "#BBB",
  "&.active": { color: "#FFF" },
  "&:hover": {
    color: "blue",
  },
}));

function ResponsiveAppBar({ urls, logo }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#202020",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Grid container>
            <Grid
              item
              md={8}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                <NavLink to="/" className="nav-link">
                  <img src={logo} height={50} alt="logo"></img>
                </NavLink>
              </Typography>
              <nav>
                {urls.nav_urls.map((r) => {
                  return (
                    <MyNavLink key={r.name} to={r.to}>
                      {r.name}
                    </MyNavLink>
                  );
                })}
              </nav>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
