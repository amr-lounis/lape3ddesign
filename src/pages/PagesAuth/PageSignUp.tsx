import MyCardImage from "./MyCardImage";
import MySignUpCard from "./MySignUpCard";
import img from "./image_sign_up.png";

export default function Page() {
  return (
    <div>
      <MyCardImage img={img}>
        <MySignUpCard></MySignUpCard>
      </MyCardImage>
    </div>
  );
}
