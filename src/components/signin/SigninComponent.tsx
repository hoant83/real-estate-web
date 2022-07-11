import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../../callApi/httpservice";
import AlertComponent from "../alert/AlertComponent";
function SigninComponent() {
  const [display, setDisplay] = useState<string>("none");
  const [infoValid, setInfoValid] = useState<string>("");
  const [colorAlert, setColorAlert] = useState<string>("#F44F2C");
  const [shouldWait, setShouldWait] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const onSignupClick = () => {
    navigate("/signup");
  };
  const gotoHome = () => {
    navigate("/");
  };
  const onForgotPassClick = () => {
    navigate("/forgotpass");
  };
  const onDangNhapClick = async () => {
    setDisplay("none");
    const checkForm = validateForm();
    if (checkForm) {
      const signin = {
        phone: phone,
        password: password,
      };
      setShouldWait(true);
      try {
        const data = await signinUser(signin);
        if (data.status === 201) {
          setInfoValid("Đăng nhập thành công!");
          setColorAlert("#0FCD49");
          setDisplay("block");
          const infoSignin = {
            access_token: data.data.access_token,
            phone: phone,
          };
          localStorage.setItem("infoSignin", JSON.stringify(infoSignin));
          setTimeout(gotoHome, 1000);
        }
      } catch (error: any) {
        if (error.response.status === 401) {
          setInfoValid("Người dùng không tồn tại!");
          setColorAlert("#F44F2C");
          setDisplay("block");
          setShouldWait(false);
        }
        if (error.response.status === 403) {
          setInfoValid("Sai mật khẩu!");
          setColorAlert("#F44F2C");
          setDisplay("block");
          setShouldWait(false);
        } else {
          setInfoValid("Lỗi mạng, xin thử lại!");
          setColorAlert("#F44F2C");
          setDisplay("block");
          setShouldWait(false);
        }
        console.log(error);
      }
    }
  };
  const validateForm = () => {
    const filterPhone = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
    const filterPhone2 = /(([02]))+([0-9]{9})\b/;

    if (!(filterPhone.test(phone) || filterPhone2.test(phone))) {
      setInfoValid("Số điện thoại sai định dạng!");
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
    return true;
  };
  return (
    <>
      {shouldWait ? (
        <div className="h-[300px]">
          <div className="centerdiv">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="sm:w-[500px] xs:w-[350px] xsm:w-[320px] h-[400px] bg-stone-100 xs:px-10 xsm:px-6 py-10">
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              placeholder="Số điện thoại"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              className="w-full h-10 rounded-md p-2 mb-6"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mb-10">
              <p
                className="text-primary ml-2 hover:cursor-pointer"
                onClick={onForgotPassClick}
              >
                Quên mật khẩu?
              </p>
            </div>
            <div
              className="mt-4 w-full h-10 bg-secondary rounded-md flex justify-center items-center text-white hover:cursor-pointer"
              onClick={onDangNhapClick}
            >
              Đăng nhập
            </div>

            <div className="flex justify-center items-center mt-10 xs:text-base xsm:text-sm">
              Bạn chưa có tài khoản?
              <p
                className="text-primary ml-2 hover:cursor-pointer "
                onClick={onSignupClick}
              >
                {" "}
                đăng ký
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

export default SigninComponent;
