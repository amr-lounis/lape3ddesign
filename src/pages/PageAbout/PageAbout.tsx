import { Container, Button } from "@mui/material";
import ComAboutAbout from "./ComAbout";
import img from "./image_about.png";
import { data } from "src/data/data_about";
import ComAboutCol from "./ComAboutCol";

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
        <ComAboutAbout
          img={img}
          title={data.AboutText.title}
          descriptions={data.AboutText.descriptions}
        ></ComAboutAbout>
        <ComAboutAbout
          img={img}
          title={data.AboutServices.title}
          descriptions={data.AboutServices.descriptions}
        ></ComAboutAbout>
        <ComAboutAbout
          img={img}
          title={data.AboutMarket.title}
          descriptions={data.AboutMarket.descriptions}
        ></ComAboutAbout>
        <ComAboutCol
          title={data.AboutEngage.title}
          descriptions={data.AboutEngage.descriptions}
        ></ComAboutCol>

        {/* <ComAboutEngage></ComAboutEngage> */}
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
