import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../callApi/httpservice";
import AlertComponent from "../alert/AlertComponent";
function SignupComponent() {
  const [display, setDisplay] = useState<string>("none");
  const [infoValid, setInfoValid] = useState<string>("");
  const [colorAlert, setColorAlert] = useState<string>("#F44F2C");
  const [shouldWait, setShouldWait] = useState<boolean>(false);
  const navigate = useNavigate();
  const onSigninClick = () => {
    navigate("/signin");
  };
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const onBtnDangKyClick = async () => {
    setDisplay("none");
    console.log(phone, email, password, fullName, place);
    const checkForm = validateForm();
    if (checkForm) {
      const user = {
        email: email,
        fullName: fullName,
        phone: phone,
        password: password,
        place: place,
      };
      try {
        setShouldWait(true);
        const data = await createNewUser(user);
        if (data.status === 201) {
          setInfoValid("Tạo người dùng thành công!");
          setColorAlert("#0FCD49");
          setDisplay("block");
          setTimeout(onSigninClick, 2000);
        }
      } catch (error: any) {
        if (error.response.status === 409) {
          setInfoValid("Người dùng đã tồn tại!");
          setColorAlert("#F44F2C");
          setDisplay("block");
          setShouldWait(false);
        } else {
          setInfoValid("Lỗi mạng, xin thử lại!");
          setColorAlert("#F44F2C");
          setDisplay("block");
          setShouldWait(false);
        }
      }
    }
  };
  const validateForm = () => {
    const filterPhone = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
    const filterPhone2 = /(([02]))+([0-9]{9})\b/;
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!(filterPhone.test(phone) || filterPhone2.test(phone))) {
      setInfoValid("Số điện thoại sai định dạng!");
      setColorAlert("#F44F2C");
      setDisplay("block");

      return false;
    }
    if (!emailValid.test(email)) {
      setInfoValid("Email sai định dạng!");
      setColorAlert("#F44F2C");
      setDisplay("block");
      return false;
    }
    if (password.trim() === "" || password.length < 8) {
      setInfoValid("Mật khẩu ít nhất 8 ký tự!");
      setColorAlert("#F44F2C");
      setDisplay("block");
      return false;
    }
    if (fullName.trim() === "") {
      setInfoValid("Họ tên không được rỗng!");
      setColorAlert("#F44F2C");
      setDisplay("block");
      return false;
    }
    return true;
  };
  return (
    <>
      {shouldWait ? (
        <div className="h-[400px]">
          <div className="centerdiv">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-stone-100 xs:px-10 xsm:px-6 py-10">
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              placeholder="Số điện thoại"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full h-10 rounded-md p-2 mb-6"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              placeholder="Họ tên"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              placeholder="Phường, tỉnh"
              onChange={(e) => setPlace(e.target.value)}
            />
            <div
              className="mt-4 w-full h-10 bg-secondary rounded-md flex justify-center items-center text-white hover:cursor-pointer"
              onClick={onBtnDangKyClick}
            >
              Đăng ký
            </div>

            <div className="flex justify-center items-center mt-10 xs:text-base xsm:text-sm">
              Bạn đã có tài khoản?
              <p
                className="text-primary ml-2 hover:cursor-pointer"
                onClick={onSigninClick}
              >
                {" "}
                đăng nhập
              </p>
            </div>
          </div>
        </div>
      )}

      <AlertComponent
        display={display}
        setDisplay={setDisplay}
        infoValid={infoValid}
        colorAlert={colorAlert}
      />
    </>
  );
}

export default SignupComponent;
