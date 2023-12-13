import { MyCardImage, MySignInCard } from "src/utils/components/MyCards";
import img from "./image_sign_in.png";

export default function PageSignIn() {
  return (
    <div>
      <MyCardImage img={img}>
        <MySignInCard></MySignInCard>
      </MyCardImage>
    </div>
  );
}
