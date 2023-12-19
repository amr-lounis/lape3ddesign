import { PageHome } from "src/pages/PageHome";
import { PageNotFond } from "src/pages/PageNotFond";
import { PageSignIn, PageSignUp } from "src/pages/PagesAuth";
import { PageContactUs } from "src/pages/PageContactUs";
import { PageServices } from "src/pages/PageServices";
import { PageMarket } from "src/pages/PageMarket";
import { PageAbout } from "src/pages/PageAbout";

export const urls = {
  baseUrl: "/lape3ddesign/",
  thisWebSite: "lape3ddesign",
  nav_urls: [
    { name: "home", to: "/" },
    { name: "market", to: "/market" },
    { name: "services", to: "/services" },
    { name: "about", to: "/about" },
  ],
  app_routes: [
    { to: "/lape3ddesign/", element: PageHome },
    { to: "/lape3ddesign/sign_in", element: PageSignIn },
    { to: "/lape3ddesign/sign_up", element: PageSignUp },
    { to: "/lape3ddesign/contact_us", element: PageContactUs },
    { to: "/lape3ddesign/services", element: PageServices },
    { to: "/lape3ddesign/market", element: PageMarket },
    { to: "/lape3ddesign/about", element: PageAbout },
    { to: "/lape3ddesign/*", element: PageNotFond },
  ],
  footers: [
    {
      title: "About",
      description: [
        { name: "Careers", to: "/Careers" },
        { name: "Press & News", to: "/" },
        { name: "Partnerships", to: "/" },
        { name: "Privacy Policy", to: "/" },
        { name: "Terms of Service", to: "/" },
        { name: "Intellectual Property Claims", to: "/" },
        { name: "Investor Relations", to: "/" },
      ],
    },
    {
      title: "Support and Education",
      description: [
        { name: "Help & Suppor", to: "/" },
        { name: "Trust & Safety", to: "/" },
        { name: "Selling on L’APE", to: "/" },
        { name: "Buying on L’APE", to: "/" },
        { name: "L’APE Guides", to: "/" },
        { name: "L’APE Workspace", to: "/" },
        { name: "Invoice Software", to: "/" },
        { name: "Learn", to: "/" },
        { name: "Online Courses", to: "/" },
      ],
    },
    {
      title: "Resources",
      description: [
        { name: "Community", to: "/" },
        { name: "Customer Success Stories", to: "/" },
        { name: "Community Hub", to: "/" },
        { name: " Forum ", to: "/" },
        { name: " Events ", to: "/" },
        { name: " Blog ", to: "/" },
        { name: " Affiliates ", to: "/" },
        { name: " Invite a Friend ", to: "/" },
        { name: " Become a Seller ", to: "/" },
        { name: " Community Standards ", to: "/" },
      ],
    },
    {
      title: "Business Solutions",
      description: [
        { name: " About Business Solutions ", to: "/" },
        { name: " L’APE Pro ", to: "/" },
        { name: " L’APE Certified ", to: "/" },
        { name: " L’APE Enterprise ", to: "/" },
        { name: " ClearVoice ", to: "/" },
        { name: " Content Marketing ", to: "/" },
        { name: " Working Not Working ", to: "/" },
        { name: " Contact Sales ", to: "/" },
      ],
    },
  ],
};
