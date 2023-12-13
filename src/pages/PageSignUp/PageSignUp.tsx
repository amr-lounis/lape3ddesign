import { MyCardImage, MySignUpCard } from "src/utils/components/MyCards";
import img from "./image_sign_up.png";

export default function PageSignUp() {
  return (
    <div>
      <MyCardImage img={img}>
        <MySignUpCard></MySignUpCard>
      </MyCardImage>
    </div>
  );
}
