import backgroundImg from "../../../src/assets/image/background-estate-img-main.jpg";
function BackgroundImgComponent() {
  return (
    <>
      <div className="w-fit">
        <img src={backgroundImg} alt="bg-img"></img>
      </div>
    </>
  );
}

export default BackgroundImgComponent;
