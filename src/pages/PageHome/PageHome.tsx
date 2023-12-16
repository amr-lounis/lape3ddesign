import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import {
  useAuth,
  MySignIn,
  MySignOut,
  MySignUp,
} from "src/utils/hooks/useAuth";

export default function PageHome() {
  const [Email, setEmail] = useState<string>("");
  const { auth } = useAuth();
  return (
    <Container
      sx={{ backgroundColor: "#fff", display: "flex", flexDirection: "column" }}
    >
      <h1>{auth.currentUser?.email}</h1>

      <TextField
        label="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></TextField>
      <Button
        onClick={() => {
          MySignIn(Email, Email);
        }}
      >
        MySignIn
      </Button>
      <hr></hr>
      <Button
        onClick={() => {
          MySignUp(Email, Email, Email);
        }}
      >
        MySignUp
      </Button>
      <hr></hr>
      <Button
        onClick={() => {
          MySignOut();
        }}
      >
        MySignOut
      </Button>
    </Container>
  );
}
