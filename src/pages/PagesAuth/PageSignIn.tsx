import MyCardImage from "./MyCardImage";
import MySignInCard from "./MySignInCard";
import img from "./image_sign_in.png";

export default function Page() {
  return (
    <div>
      <MyCardImage img={img}>
        <MySignInCard></MySignInCard>
      </MyCardImage>
    </div>
  );
}
