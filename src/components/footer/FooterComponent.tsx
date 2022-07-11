import hsbc from "../../assets/image/hsbc.png";
import visa from "../../assets/image/visa.png";
import mastercard from "../../assets/image/mastercard.png";
import jcb from "../../assets/image/jcb.png";
import facebook from "../../assets/image/facebook.png";
import instagram from "../../assets/image/instagram.png";
import twitter from "../../assets/image/twitter.png";
function FooterComponent() {
  return (
    <>
      <div className="bg-secondary w-full h-auto lg:px-24 md:px-2 xsm:px-8 py-16 md:text-left flex xsm:text-center items-center text-white lg:gap-10 md:gap-7 xsm:gap-7 md:flex-nowrap xsm:flex-wrap">
        <div className="md:w-[25%] xs:w-[45%] xsm:w-[95%]">
          <h1 className="mb-2 text-2xl font-[700]">RentSeller</h1>
          <br></br>
          <p>
            Chúng tôi có nhiều hình thức thanh toán, khách hàng có thể chọn 1
            trong những phương thức sau.
          </p>
          <br></br>
          <div className="flex gap-2 xsm:justify-center md:justify-start">
            <img className="w-10 h-10" src={hsbc} alt="hsbc" />
            <img className="w-10 h-10" src={visa} alt="visa" />
            <img className="w-10 h-10" src={mastercard} alt="mst" />
            <img className="w-10 h-10" src={jcb} alt="jcb" />
          </div>
        </div>
        <div className="md:w-[25%] xs:w-[45%] xsm:w-[95%]">
          <h1 className="mb-2 text-xl font-[700]">Link quan trọng</h1>
          <br></br>
          <div className="space-y-4">
            <p>Trang chủ</p>
            <p>Liên hệ</p>
            <p>Thuê</p>
            <p>Mua bán</p>
            <p>Tin tức</p>
          </div>
        </div>
        <div className="md:w-[25%] xs:w-[45%] xsm:w-[95%]">
          <h1 className="mb-2 text-xl font-[700]">Link quan trọng</h1>
          <br></br>
          <div className="space-y-4">
            <p>Trang chủ</p>
            <p>Liên hệ</p>
            <p>Thuê</p>
            <p>Mua bán</p>
            <p>Tin tức</p>
          </div>
        </div>
        <div className="md:w-[25%] xs:w-[45%] xsm:w-[95%]">
          <h1 className="mb-2 text-xl font-[700]">Mạng xã hội</h1>
          <br></br>
          <p>
            Liên hệ với chúng tôi qua các mạng xã hội như facebook, instagram,
            twitter để nhận được những thông báo mới nhất.
          </p>
          <br></br>
          <div className="flex gap-2 xsm:justify-center md:justify-start">
            <img className="w-10 h-10" src={facebook} alt="facebook" />
            <img className="w-10 h-10" src={instagram} alt="ins" />
            <img className="w-10 h-10" src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
