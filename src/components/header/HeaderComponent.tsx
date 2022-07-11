import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userAvatar from "../../assets/image/user2.png";
import { checkAccessToken, getUserByPhone } from "../../callApi/httpservice";
function HeaderComponent({ underline, shouldShowHeader }: any) {
  const navigate = useNavigate();
  const [popupDisplay, setPopupDisplay] = useState<string>("none");
  const [widthMenu, setWidthMenu] = useState<string>("");
  const [account, setAccount] = useState<any>(null);
  const openNav = () => {
    setWidthMenu("250px");
  };
  const closeNav = () => {
    setWidthMenu("0");
  };
  const onTrangChuClick = () => {
    navigate("/");
  };
  const onDangNhapClick = () => {
    navigate("/signin");
  };
  const onDangKyClick = () => {
    navigate("/signup");
  };
  const onAvatarClick = () => {
    setPopupDisplay("block");
  };
  const onClickOut = () => {
    setPopupDisplay("none");
  };
  const onDangXuatClick = () => {
    localStorage.removeItem("infoSignin");
    setAccount(null);
  };
  const onXemThongTinClick = async () => {
    const infoSignin = await localStorage.getItem("infoSignin");
    if (infoSignin !== null) {
      try {
        navigate("/infoUser");
        const parse = JSON.parse(infoSignin);
        const data = await getUserByPhone(parse.phone);
        console.log(data);
      } catch (error) {
        console.log(error);
        navigate("/signin");
      }
    }
  };
  const checkTokenHandler = async (parse: any) => {
    try {
      const data = await checkAccessToken();
      const userToken = {
        access_token: parse.access_token,
        phone: parse.phone,
      };
      setAccount(userToken);
      return data;
    } catch (error) {
      setAccount(null);
      localStorage.removeItem("infoSignin");
    }
  };
  useEffect(() => {
    const infoSignin = localStorage.getItem("infoSignin");
    console.log(infoSignin);

    if (infoSignin !== null) {
      try {
        const parse = JSON.parse(infoSignin);
        if (parse.access_token === null || parse.phone === null) {
          localStorage.removeItem("infoSignin");
        } else {
          checkTokenHandler(parse);
        }
      } catch (error) {
        console.log("remove items");
        localStorage.removeItem("infoSignin");
      }
    }
  }, []);
  return (
    <>
      <div
        className="xl:py-8 xl:px-32 xl:flex xl:items-center xl:justify-between
      md:py-8 md:px-10 md:flex md:items-center md:justify-between
      sm:py-8 sm:px-5 sm:flex sm:items-center sm:justify-between
    xs:py-8 xs:px-5 xs:flex xs:items-center xs:justify-between
    xsm:py-8 xsm:px-5 xsm:flex xsm:items-center xsm:justify-between"
      >
        <div
          className="text-xl text-primary font-bold hover:cursor-pointer"
          onClick={onTrangChuClick}
        >
          RentSeller
        </div>
        {shouldShowHeader ? (
          <div className="hidden sm:block">
            <div className=" xl:gap-7 sm:gap-2 md:text-base xsm:text-sm relative flex">
              <div
                className="hover:border-b-4 hover:border-primary hover:cursor-pointer"
                id="home"
                onClick={onTrangChuClick}
              >
                Trang chủ
              </div>
              <div
                className="hover:border-b-4 hover:border-primary hover:cursor-pointer"
                id="buy"
              >
                Mua
              </div>
              <div
                className="hover:border-b-4 hover:border-primary hover:cursor-pointer"
                id="sell"
              >
                Bán
              </div>
              <div
                className="hover:border-b-4 hover:border-primary hover:cursor-pointer"
                id="rent"
              >
                Thuê
              </div>
              <div
                className="hover:border-b-4 hover:border-primary hover:cursor-pointer"
                id="news"
              >
                Tin tức
              </div>
            </div>
          </div>
        ) : null}

        {shouldShowHeader ? (
          <div className="hidden sm:block">
            {account ? (
              <div>
                <div>
                  <img
                    src={userAvatar}
                    className="w-10 h-10 hover:cursor-pointer"
                    alt="avatar"
                    onMouseEnter={onAvatarClick}
                  />
                </div>
                <div
                  onMouseLeave={onClickOut}
                  style={{ display: popupDisplay }}
                  className="absolute bg-slate-300 min-w-[130px] h-20 bottom-24 z-10 sm:top-20 sm:right-10 md:top-20 md:right-14 xl:top-20 xl:right-36 p-2 rounded-md opacity-70 text-sm"
                >
                  <p
                    className="hover:bg-slate-600 rounded-md p-1 hover:text-white hover:cursor-pointer"
                    onClick={onDangXuatClick}
                  >
                    Đăng xuất
                  </p>
                  <p
                    className="hover:bg-slate-600 rounded-md p-1 hover:text-white hover:cursor-pointer"
                    onClick={onXemThongTinClick}
                  >
                    Thông tin tôi
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-10 xs:gap-5 items-center md:text-base xsm:text-sm">
                <div onClick={onDangNhapClick} className="hover:cursor-pointer">
                  Đăng nhập
                </div>
                <div
                  className="w-32 h-8 bg-primary rounded-md flex justify-center items-center text-white hover:cursor-pointer"
                  onClick={onDangKyClick}
                >
                  Đăng ký
                </div>
              </div>
            )}
          </div>
        ) : null}

        {shouldShowHeader ? (
          <div className="visible sm:hidden cursor-pointer" onClick={openNav}>
            <div className="w-10 h-1 bg-black mr-0  "></div>
            <div className="w-10 h-1 bg-black mt-1 mr-0 "></div>
            <div className="w-10 h-1 bg-black mt-1 mr-0  "></div>
          </div>
        ) : null}
      </div>
      <div style={{ width: widthMenu }} id="mySidenav" className="sidenav">
        <p className="closebtn" onClick={closeNav}>
          &times;
        </p>
        <p>Trang chủ</p>
        <p>Mua</p>
        <p>Bán</p>
        <p>Tin tức</p>
        <br></br>
        {account ? (
          <div className="flex justify-center items-center">
            <img src={userAvatar} className="w-10 h-10" alt="avatar" />
          </div>
        ) : (
          <div className="w-full justify-center items-center">
            <p className="mb-5" onClick={onDangNhapClick}>
              Đăng nhập
            </p>
            <p className="mb-5 " onClick={onDangKyClick}>
              Đăng ký
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default HeaderComponent;
