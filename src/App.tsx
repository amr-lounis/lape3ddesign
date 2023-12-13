import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
//
import {
  app_routes,
  nav_urls,
  public_particles,
  public_images,
  auth_urls,
} from "src/data-urls";
//
import { MyNavBar } from "src/utils/components/MyNavBar";
import { store } from "src/utils/store";
import { MyParticles } from "./utils/components/MyParticles";
//
import { MyFooter } from "./utils/components/MyFooter";
import "./app.css";
//
const App = () => {
  return (
    <>
      <MyParticles url={public_particles.particles}></MyParticles>
      <Provider store={store}>
        <BrowserRouter>
          <MyNavBar
            nav_urls={nav_urls}
            auth_urls={auth_urls}
            logo={public_images.logo}
          />
          <Routes>
            {app_routes.map((r) => {
              return (
                <Route key={r.to} path={r.to} element={<r.element />}></Route>
              );
            })}
          </Routes>
          <MyFooter></MyFooter>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
