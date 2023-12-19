import MyCardImage from "src/utils/components/MyCards/MyCardImage";
import MySignUpCard from "./MySignUpCard";
import img from "./image_sign_up.png";
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
        <MySignUpCard></MySignUpCard>
      </MyCardImage>
    </div>
  );
}
