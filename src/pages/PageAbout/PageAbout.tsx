import { Container, Button } from "@mui/material";
import ComAbout1 from "./ComAbout1";
import ComAbout2 from "./ComAbout2";
import ComAbout3 from "./ComAbout3";

export default function PageServices() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <ComAbout1></ComAbout1>
        <ComAbout2></ComAbout2>
        <ComAbout3></ComAbout3>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            p: 10,
          }}
        >
          <Button variant="contained">GET IN TOUCH</Button>
          <Button variant="contained">BECOME A DESIGNER</Button>
        </Container>
      </Container>
    </div>
  );
}
