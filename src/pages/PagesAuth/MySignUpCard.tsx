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
import { MySignUp } from "src/utils/hooks/useAuth";

const MyLinkRoute = styled(NavLink)(() => ({
  fontSize: "1rem",
  textDecoration: "none",
  color: "#555",
  "&.active": { color: "#FFF" },
  "&:hover": {
    color: "blue",
  },
}));

export default function MySignUpCard() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email").toString();
    const password = data.get("password").toString();
    console.log(data);
    // MySignUp("", email, password);
  };
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password confirmation"
              label="Password confirmation"
              type="password"
              id="password_confirmation"
              autoComplete="password_confirmation"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <MyLinkRoute to="/sign_in">
              Don't have an account? Sign Up
            </MyLinkRoute>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
