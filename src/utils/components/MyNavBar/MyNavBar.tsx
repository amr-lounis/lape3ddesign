import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
import MyProfileMenu from "./MyProfileMenu";
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
        <nav>
          <Toolbar disableGutters>
            <Grid
              container
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <Typography>
                  <NavLink to="/" className="nav-link">
                    <img src={logo} height={50} alt="logo"></img>
                  </NavLink>
                </Typography>
              </Grid>
              <Grid item>
                {urls.nav_urls.map((r) => {
                  return (
                    <MyNavLink key={r.name} to={r.to}>
                      {r.name}
                    </MyNavLink>
                  );
                })}
              </Grid>
              <Grid item>
                <MyProfileMenu></MyProfileMenu>
              </Grid>
            </Grid>
          </Toolbar>
        </nav>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
