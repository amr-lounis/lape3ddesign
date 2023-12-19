import { Container, Button } from "@mui/material";
import ComAbout from "./ComAbout";
import img from "./image_about.png";
import { data } from "src/data/data_about";
import ComAboutCol from "./ComAboutCol";
import { useNavigate } from "react-router-dom";

export default function PageServices() {
  const navigate = useNavigate();
  return (
    <Container
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      <ComAbout
        img={img}
        title={data.AboutText.title}
        descriptions={data.AboutText.descriptions}
      ></ComAbout>
      <ComAbout
        img={img}
        title={data.AboutServices.title}
        descriptions={data.AboutServices.descriptions}
      ></ComAbout>
      <ComAbout
        img={img}
        title={data.AboutMarket.title}
        descriptions={data.AboutMarket.descriptions}
      ></ComAbout>
      <ComAboutCol
        title={data.AboutEngage.title}
        descriptions={data.AboutEngage.descriptions}
      ></ComAboutCol>
      <Container>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/contact_us");
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Container>
  );
}
