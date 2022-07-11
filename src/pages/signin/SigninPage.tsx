import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import SigninComponent from "../../components/signin/SigninComponent";

function SigninPage({ shouldShowHeader }: any) {
  return (
    <>
      <HeaderComponent shouldShowHeader={shouldShowHeader} />
      <SigninComponent />
      <br></br>
      <br></br>
      <FooterComponent />
    </>
  );
}

export default SigninPage;
