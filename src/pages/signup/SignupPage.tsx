import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import SignupComponent from "../../components/signup/SignupComponent";

function SignupPage({ shouldShowHeader }: any) {
  return (
    <>
      <HeaderComponent shouldShowHeader={shouldShowHeader} />
      <SignupComponent />
      <br></br>
      <br></br>
      <FooterComponent />
    </>
  );
}

export default SignupPage;
