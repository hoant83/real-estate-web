function YouWantBuyOrRent() {
  return (
    <>
      <br></br>
      <h1 className="text-center font-[500] text-2xl mb-24">
        Bạn có muốn mua/thuê một bất động sản không?
      </h1>
      <div className="w-[100%] m-auto flex justify-center">
        <div className="sm:w-3/4 xsm:w-5/6 bg-white border-2 flex m-auto h-24 -mb-5 z-50 rounded-md shadow-md absolute -mt-16">
          <div className="w-[100%] m-auto flex text-center sm:px-20 xsm:px-5 justify-between">
            <input
              placeholder="Nhập email của bạn"
              className="border-2 lg:w-[520px] sm:w-[320px] xsm:w-[160px]  rounded-md"
            />
            <div className="w-[40%] h-8 bg-primary rounded-md text-white flex justify-center items-center">
              Gửi
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YouWantBuyOrRent;
