import { useEffect, useState } from "react";
import {
  checkAccessToken,
  getUserByPhone,
  updateUserInfo,
} from "../../callApi/httpservice";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../alert/AlertComponent";

function InfoUserComponent() {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState<any>(null);
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [userId, setUserId] = useState<number>(-1);
  const [display, setDisplay] = useState<string>("none");
  const [infoValid, setInfoValid] = useState<string>("");
  const [colorAlert, setColorAlert] = useState<string>("#F44F2C");
  const onBtnSuaClick = async () => {
    const checkForm = validateForm();
    if (checkForm) {
      const userInfoValidated = {
        email: email,
        fullName: fullName,
        phone: phone,
        place: place,
        idEstate: -1,
      };
      try {
        const userUpdate = await updateUserInfo(userInfoValidated, userId);
        setInfoValid("Sửa thông tin thành công!");
        setColorAlert("#0FCD49");
        setDisplay("block");
      } catch (error) {
        setInfoValid("Sửa thông tin thất bại, thử lại!");
        setColorAlert("#F44F2C");
        setDisplay("block");
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
    if (fullName.trim() === "") {
      setInfoValid("Họ tên không được rỗng!");
      setColorAlert("#F44F2C");
      setDisplay("block");
      return false;
    }
    return true;
  };
  const checkTokenHandler = async (parse: any) => {
    try {
      const data = await checkAccessToken();
      const userFound = await getUserByPhone(parse.phone);
      console.log(userFound);
      if (userFound) {
        setDataUser(userFound.data);
        setPhone(userFound.data.phone);
        setEmail(userFound.data.email);
        setFullName(userFound.data.fullName);
        setPlace(userFound.data.place);
        setUserId(userFound.data.id);
      } else {
        console.log("error");
      }
    } catch (error) {
      localStorage.removeItem("infoSignin");
      navigate("/signin");
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
          navigate("/signin");
        } else {
          checkTokenHandler(parse);
        }
      } catch (error) {
        console.log("remove items");
        localStorage.removeItem("infoSignin");
        navigate("/signin");
      }
    }
  }, []);
  return (
    <>
      {dataUser ? (
        <div className="flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-stone-100 xs:px-10 xsm:px-6 py-10">
            <p className="text:sm">Xin chào {fullName}!</p>
            <br></br>
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="w-full h-10 rounded-md p-2 mb-6"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <div
              className="mt-4 w-full h-10 bg-secondary rounded-md flex justify-center items-center text-white hover:cursor-pointer"
              onClick={onBtnSuaClick}
            >
              Sửa
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[400px]">
          <div className="centerdiv">
            <div className="loader"></div>
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

export default InfoUserComponent;
