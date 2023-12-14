import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  styled,
  Typography,
  Box,
  Link,
  Grid,
} from "@mui/material";

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

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function ResponsiveAppBar({ urls }) {
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
                  <img src={urls.images.logo} height={50} alt="logo"></img>
                </NavLink>
              </Typography>
              <nav>
                {urls.nav_urls.map((r) => {
                  return (
                    <MyNavLink
                      key={r.name}
                      to={r.to}
                      sx={{ my: 1, mx: 1.5 }}
                      color="text.primary"
                    >
                      {r.name}
                    </MyNavLink>
                  );
                })}
              </nav>
            </Grid>
            <Grid
              item
              md={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
              >
                <MyNavLink to="/sign_in">
                  <Link
                    color="inherit"
                    variant="h6"
                    underline="none"
                    sx={rightLink}
                  >
                    {"SignIn"}
                  </Link>
                </MyNavLink>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
