import FooterComponent from "../../components/footer/FooterComponent";
import FogotPasswordComponent from "../../components/forgotPassword/ForgotPasswordComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
function FogotPasswordPage({ shouldShowHeader }: any) {
  return (
    <>
      <HeaderComponent shouldShowHeader={shouldShowHeader} />
      <FogotPasswordComponent />
      <br></br>
      <br></br>
      <FooterComponent />
    </>
  );
}

export default FogotPasswordPage;
