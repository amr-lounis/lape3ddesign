import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
//
import { urls } from "src/data/App-urls";
//
import { MyNavBar } from "src/utils/components/MyNavBar";
import { store } from "src/utils/store";
import { MyParticles } from "./utils/components/MyParticles";
//
import { MyFooter } from "./utils/components/MyFooter";
import "./app.css";
const App = () => {
  return (
    <>
      <MyParticles index={0}></MyParticles>
      <Provider store={store}>
        <BrowserRouter>
          <MyNavBar urls={urls} />
          <Routes>
            {urls.app_routes.map((r) => {
              return (
                <Route key={r.to} path={r.to} element={<r.element />}></Route>
              );
            })}
          </Routes>
          <MyFooter urls={urls}></MyFooter>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
