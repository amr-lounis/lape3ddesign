import { Container } from "@mui/material";
import MyCardImage from "src/utils/components/MyCards/MyCardImage";
import MyContactUsCard from "./MyContactUsCard";
import img from "./image_contact_us.png";

export default function Page() {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <MyCardImage img={img}>
          <MyContactUsCard></MyContactUsCard>
        </MyCardImage>
      </Container>
    </div>
  );
}
