import styled from "@emotion/styled";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Typography,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { MySignIn } from "src/utils/hooks/useAuth";
//
const MyLinkRoute = styled(NavLink)(() => ({
  fontSize: "1rem",
  textDecoration: "none",
  color: "#555",
  "&.active": { color: "#FFF" },
  "&:hover": {
    color: "blue",
  },
}));

export default function MySignInCard() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email").toString();
    const password = data.get("password").toString();
    MySignIn(email, password);
  };
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          variant="standard"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          variant="standard"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <MyLinkRoute to="/forgot">"Forgot password?"</MyLinkRoute>
          </Grid>
          <Grid item>
            <MyLinkRoute to="/sign_up">
              "Don't have an account? Sign Up"
            </MyLinkRoute>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
