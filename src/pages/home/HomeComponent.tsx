import AnswerAndQuestion from "../../components/anserAndQuestion/AnswerAndQuestion";
import BackgroundImgComponent from "../../components/backGroundImage/BackgroundImgComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import KnowMoreComponent from "../../components/knowMore/KnowMoreComponent";
import MenuFilterComponent from "../../components/menuFilter/MenuFilterComponent";
import RentProductComponent from "../../components/rentProduct/RentProductComponent";
import YouWantBuyOrRent from "../../components/youWantBuy/YouWantBuyOrRentComponent";
import { useStores } from "../../store";
function HomeComponent({ shouldShowHeader }: any) {
  const { acountsStore } = useStores();
  console.log(acountsStore.account);
  return (
    <>
      <HeaderComponent underline={"home"} shouldShowHeader={shouldShowHeader} />
      <BackgroundImgComponent />
      <MenuFilterComponent />
      <br></br>
      <RentProductComponent />
      <br></br>
      <RentProductComponent />
      <br></br>
      <KnowMoreComponent />
      <br></br>
      <AnswerAndQuestion />
      <br></br>
      <br></br>
      <YouWantBuyOrRent />
      <FooterComponent />
    </>
  );
}

export default HomeComponent;
