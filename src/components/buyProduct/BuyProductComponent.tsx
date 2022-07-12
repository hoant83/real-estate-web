import pool from "../../assets/image/pool.png";
import bedroom from "../../assets/image/bedroom.png";
import bathroom from "../../assets/image/bathroom.png";
import location from "../../assets/image/location.png";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { getEstateByType } from "../../callApi/httpservice";
function BuyProductComponent() {
  const [dataBuyHouse, setDataBuyHouse] = useState<any>(null);
  const getRentHouseHandler = async () => {
    const type = "ban";
    const result = await getEstateByType(type, 4, 0);
    setDataBuyHouse(result?.data);
  };
  useEffect(() => {
    getRentHouseHandler();
  }, []);
  return (
    <>
      <div className="xl:px-36 md:px-12 sm:px-6 xsm:px-4 flex justify-between items-center">
        <p className="sm:text-2xl xsm:text-xl font-[700]">Nhà Bán</p>
        <p>Xem thêm</p>
      </div>
      <div
        className="
        m-auto justify-between
        xl:py-4 xl:px-32 xl:flex xl:items-center 
      md:py-4 md:px-10 md:flex md:items-center 
      sm:py-4 sm:px-5 sm:flex sm:items-center 
    xs:py-4 xs:px-3 xs:flex xs:items-center 
    xsm:py-4 xsm:px-2 xsm:flex xsm:items-center flex-wrap
    "
      >
        {dataBuyHouse
          ? dataBuyHouse.map((row: any, index: any) => (
              <div
                className=" xl:w-[22%] sm:w-[45%] xs:w-[44%] xsm:w-[97%]  m-3 p-4 rounded-md shadow-md relative float-left"
                key={index}
              >
                <img
                  className="w-full h-52 rounded-md"
                  src={row.imgUrl[0]}
                  alt="John"
                />
                <p className="float-left absolute text-white top-6 right-8 bg-red-600 w-20 text-center rounded-md">
                  Bán
                </p>

                <div className="mt-3 ml-2 flex items-center">
                  <img className="w-3 h-3 mr-4" src={location} alt="location" />
                  <p>
                    {row.gerion === "laithieu"
                      ? "Lái Thiêu"
                      : row.gerion === "binhnham"
                      ? "Bình Nhâm"
                      : row.gerion === "thuanan"
                      ? "Thuận An"
                      : row.gerion === "binhchuan"
                      ? "Bình Chuẩn"
                      : "Vĩnh Phú"}
                  </p>
                </div>

                <h2 className="ml-2 font-[500] mt-2 mb-2">{row.name}</h2>
                <h3 className="ml-2 font-[700] text-primary">
                  {new Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "vnd",
                  }).format(row.price)}
                </h3>

                <div className="flex justify-between text-sm text-center mt-3 ml-2 md:text-base xs:text-xs xsm-text-base">
                  <div className="">
                    <img
                      className="w-5 h-5 mr-4 ml-5"
                      src={bedroom}
                      alt="bed"
                    />
                    <p>{row.bed} giường</p>
                  </div>
                  <div className="">
                    <img
                      className="w-5 h-5 mr-4 ml-5"
                      src={bathroom}
                      alt="bath"
                    />
                    <p>{row.bed} toilet</p>
                  </div>
                  <div className="">
                    <img className="w-5 h-5 mr-4 ml-5" src={pool} alt="pool" />
                    <p>{row.pool ? "Có" : "Không"} hồ</p>
                  </div>
                </div>
                <div className="mt-4 w-full h-8 bg-secondary rounded-md flex justify-center items-center text-white">
                  Liên hệ
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default observer(BuyProductComponent);
