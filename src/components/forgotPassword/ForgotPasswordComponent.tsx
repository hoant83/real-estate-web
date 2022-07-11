import { useNavigate } from "react-router-dom";
function FogotPasswordComponent() {
  const navigate = useNavigate();
  const onSignupClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[500px] h-[400px] bg-stone-100 xs:px-10 xsm:px-6 py-10">
          <input
            className="w-full h-10 rounded-md p-2 mb-6"
            placeholder="Số điện thoại"
          />
          <input
            type="password"
            className="w-full h-10 rounded-md p-2 mb-6"
            placeholder="Mật khẩu mới"
          />
          <input
            type="password"
            className="w-full h-10 rounded-md p-2 mb-6"
            placeholder="Nhập lại mật khẩu"
          />

          <div className="mt-4 w-full h-10 bg-secondary rounded-md flex justify-center items-center text-white hover:cursor-pointer">
            Đổi mật khẩu
          </div>
          <div className="flex justify-center items-center mt-10 xs:text-base xsm:text-sm">
            Bạn chưa có tài khoản?
            <p
              className="text-primary ml-2 hover:cursor-pointer"
              onClick={onSignupClick}
            >
              {" "}
              đăng ký
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FogotPasswordComponent;
