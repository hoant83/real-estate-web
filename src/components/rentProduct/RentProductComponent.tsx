import imgtest from "../../assets/image/background-estate-img-main.jpg";
import pool from "../../assets/image/pool.png";
import bedroom from "../../assets/image/bedroom.png";
import bathroom from "../../assets/image/bathroom.png";
import location from "../../assets/image/location.png";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStores } from "../../store";
import { getEstateByFilter } from "../../callApi/httpservice";
function RentProductComponent() {
  const { renderingStore } = useStores();
  const renderring = renderingStore.getRendering();
  const testDataList = [
    {
      id: 1,
      name: "Nhà Bán Gấp",

      category: "Nhà phố",

      price: 1200000000,

      bed: 4,

      toilet: 2,

      m2: 123,

      pool: true,

      widthStreet: "7m",

      notification: "Nhà cần bán gấp",

      otoStreet: true,

      gerion: "Vĩnh Phú",

      status: 1,
      type: "Bán",
    },
    {
      id: 2,
      name: "Biệt Thự Vĩnh Kim",

      category: "Biệt Thự",

      price: 6200000000,

      bed: 8,

      toilet: 3,

      m2: 300,

      pool: true,

      widthStreet: "12m",

      notification: "Biệt thự cần bán gấp",

      otoStreet: true,

      gerion: "Vĩnh Phú",

      status: 1,
      type: "Bán",
    },
    {
      id: 3,
      name: "Biệt Thự Trần Gia",

      category: "Biệt Thự",

      price: 5800000000,

      bed: 7,

      toilet: 3,

      m2: 260,

      pool: true,

      widthStreet: "10m",

      notification: "Biệt thự cần bán gấp",

      otoStreet: true,

      gerion: "Thuận An",

      status: 1,
      type: "Bán",
    },
    {
      id: 4,
      name: "Đất Nền Bình Chuẩn",

      category: "Đất nền",

      price: 3200000000,

      bed: 0,

      toilet: 0,

      m2: 460,

      pool: false,

      widthStreet: "15m",

      notification: "Đất nền cần bán gấp",

      otoStreet: true,

      gerion: "Bình Chuẩn",

      status: 1,
      type: "Cho thuê",
    },
    {
      id: 4,
      name: "Nhà Phố 4 Tầng",

      category: "Nhà phố",

      price: 4000000000,

      bed: 4,

      toilet: 2,

      m2: 160,

      pool: false,

      widthStreet: "12m",

      notification: "Nhà phố cần bán gấp",

      otoStreet: true,

      gerion: "Thuận An",

      status: 1,
      type: "Cho thuê",
    },
  ];
  useEffect(() => {
    const category: any = renderingStore.getCategory();
    const price: any = renderingStore.getPrice();
    const gerion: any = renderingStore.getGerion();
    const take = 4;
    const skip = 0;
    const data = getEstateByFilter(category, gerion, price, take, skip);
    console.log(data);
  }, [renderring]);
  return (
    <>
      <div className="xl:px-36 md:px-12 sm:px-6 xsm:px-4 flex justify-between items-center">
        <p className="sm:text-2xl xsm:text-xl font-[700]">Nhà Cho Thuê</p>
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
        {testDataList
          ? testDataList.slice(0, 4).map((row, index) => (
              <div
                className=" xl:w-[22%] sm:w-[45%] xs:w-[44%] xsm:w-[97%]  m-3 p-4 rounded-md shadow-md relative float-left"
                key={index}
              >
                <img
                  className="w-full h-52 rounded-md"
                  src={imgtest}
                  alt="John"
                />
                {row.type === "Cho thuê" ? (
                  <p className="float-left absolute text-white top-6 right-8 bg-red-600 w-20 text-center rounded-md">
                    {row.type}
                  </p>
                ) : (
                  <p className="float-left absolute text-white top-6 right-8 bg-orange-400 w-20 text-center rounded-md">
                    {row.type}
                  </p>
                )}
                <div className="mt-3 ml-2 flex items-center">
                  <img className="w-3 h-3 mr-4" src={location} alt="location" />
                  <p>{row.gerion}</p>
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

export default observer(RentProductComponent);
