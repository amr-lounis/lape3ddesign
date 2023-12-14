import { PageHome } from "src/pages/PageHome";
import { PageNotFond } from "src/pages/PageNotFond";
import { PageSignIn } from "./pages/PageSignIn";
import { PageSignUp } from "./pages/PageSignUp";
import { PageContactUs } from "./pages/PageContactUs";
import { PageServices } from "./pages/PageServices";
import { PageMarket } from "./pages/PageMarket";
import { PageAbout } from "./pages/PageAbout";

export const urls = {
  nav_urls: [
    { name: "home", to: "/" },
    { name: "market", to: "/market" },
    { name: "services", to: "/services" },
    { name: "about", to: "/about" },
  ],
  images: {
    logo: "/images/logo.png",
  },
  app_routes: [
    { to: "/", element: PageHome },
    { to: "/sign_in", element: PageSignIn },
    { to: "/sign_up", element: PageSignUp },
    { to: "/contact_us", element: PageContactUs },
    { to: "/services", element: PageServices },
    { to: "/market", element: PageMarket },
    { to: "/about", element: PageAbout },
    { to: "/*", element: PageNotFond },
  ],
  thisWebSite: "",
};
