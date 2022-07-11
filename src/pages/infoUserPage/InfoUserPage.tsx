import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import InfoUserComponent from "../../components/infoUser/InfoUserComponent";

function InfoUserPage({ shouldShowHeader }: any) {
  return (
    <>
      <HeaderComponent shouldShowHeader={shouldShowHeader} />
      <br></br>
      <InfoUserComponent />
      <br></br>
      <FooterComponent />
    </>
  );
}

export default InfoUserPage;
