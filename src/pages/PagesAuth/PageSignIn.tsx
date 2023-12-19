import MyCardImage from "../../utils/components/MyCards/MyCardImage";
import MySignInCard from "./MySignInCard";
import img from "./image_sign_in.png";
import { useAuth } from "src/utils/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (isSignedIn) {
    navigate("/");
  }
  return (
    <div>
      <MyCardImage img={img}>
        <MySignInCard></MySignInCard>
      </MyCardImage>
    </div>
  );
}
