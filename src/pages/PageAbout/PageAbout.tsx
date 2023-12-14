import { Container, Button } from "@mui/material";
import ComAboutPremier from "./ComAboutPremier";
import ComAboutServices from "./ComAboutServices";
import ComAboutEngage from "./ComAboutEngage";
import ComAboutMarket from "./ComAboutMarket";

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
        <ComAboutPremier></ComAboutPremier>
        <ComAboutServices></ComAboutServices>
        <ComAboutMarket></ComAboutMarket>
        <ComAboutEngage></ComAboutEngage>
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
