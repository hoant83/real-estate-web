import "./App.css";
import HomeComponent from "./pages/home/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/signin/SigninPage";
import FogotPasswordPage from "./pages/forgotPass/ForgotPasswordPage";
import SignupPage from "./pages/signup/SignupPage";
import InfoUserPage from "./pages/infoUserPage/InfoUserPage";
import { observer } from "mobx-react-lite";
function App() {
  const isHome = true;
  const isSignin_up_forgot = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<HomeComponent shouldShowHeader={isHome} />}
          ></Route>
          <Route
            path="/signin"
            element={<SigninPage shouldShowHeader={isSignin_up_forgot} />}
          ></Route>
          <Route
            path="/forgotpass"
            element={
              <FogotPasswordPage shouldShowHeader={isSignin_up_forgot} />
            }
          ></Route>
          <Route
            path="/signup"
            element={<SignupPage shouldShowHeader={isSignin_up_forgot} />}
          ></Route>
          <Route
            path="/infouser"
            element={<InfoUserPage shouldShowHeader={isHome} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default observer(App);
