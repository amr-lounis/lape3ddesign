import { PageHome } from "src/pages/PageHome";
import { PageNotFond } from "src/pages/PageNotFond";
import { PageSignIn } from "./pages/PageSignIn";
import { PageSignUp } from "./pages/PageSignUp";
import { PageContactUs } from "./pages/PageContactUs";
import { PageServices } from "./pages/PageServices";
import { PageMarket } from "./pages/PageMarket";
import { PageAbout } from "./pages/PageAbout";

export const nav_urls = [
  { name: "home", to: "/" },
  { name: "about", to: "/about" },
  { name: "market", to: "/market" },
  { name: "services", to: "/services" },
  { name: "contact us", to: "/contact_us" },
];

export const auth_urls = [
  { name: "sign in", to: "/sign_in" },
  { name: "sign up", to: "/sign_up" },
];

export const app_routes = [
  { to: "/", element: PageHome },
  { to: "/sign_in", element: PageSignIn },
  { to: "/sign_up", element: PageSignUp },
  { to: "/contact_us", element: PageContactUs },
  { to: "/services", element: PageServices },
  { to: "/market", element: PageMarket },
  { to: "/about", element: PageAbout },
  { to: "/*", element: PageNotFond },
];

export const public_images = {
  logo: "/images/logo@2x.png",
};

export const public_particles = {
  particles: "/particles/particles.json",
  particles2: "/particles/particles2.json",
};
