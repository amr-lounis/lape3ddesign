import EmailIcon from "@mui/icons-material/Email";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Avatar,
} from "@mui/material";

export default function MyContactUsCard() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <EmailIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Contact Us
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
              multiline
              rows={4}
              required
              fullWidth
              name="message"
              label="message"
              type="text"
              id="message"
              autoComplete="message"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send
        </Button>
      </Box>
    </>
  );
}
