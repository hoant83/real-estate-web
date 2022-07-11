import { observer } from "mobx-react-lite";
import { useStores } from "../../store";

function MenuFilterComponent() {
  const { acountsStore, renderingStore } = useStores();
  const onCategoryChange = (e: any) => {
    if (e.target.value === "") {
      renderingStore.setCategory(null);
    } else {
      renderingStore.setCategory(e.target.value);
    }
  };
  const onPriceChange = (e: any) => {
    const value = e.target.value;
    console.log(value);
    if (value === "500") {
      renderingStore.setPrice(500000);
    }
    if (value === "1ti") {
      renderingStore.setPrice(1000000);
    }
    if (value === "2ti") {
      renderingStore.setPrice(2000000);
    }
    if (value === "3ti") {
      renderingStore.setPrice(3000000);
    }
    if (value === "4ti") {
      renderingStore.setPrice(4000000);
    }
    if (value === "5ti") {
      renderingStore.setPrice(5000000);
    }
    if (value === "6ti") {
      renderingStore.setPrice(6000000);
    }
    if (value === "7ti") {
      renderingStore.setPrice(7000000);
    }
    if (value === "8ti") {
      renderingStore.setPrice(8000000);
    }
    if (value === "9ti") {
      renderingStore.setPrice(9000000);
    }
    if (value === "duoi15ti") {
      renderingStore.setPrice(15000000);
    }
    if (value === "") {
      renderingStore.setPrice(100000000);
    }
  };
  const onGerionChange = (e: any) => {
    if (e.target.value === "") {
      renderingStore.setGerion(null);
    } else {
      renderingStore.setGerion(e.target.value);
    }
  };
  const onLocClick = async () => {
    renderingStore.setRendering();
  };
  return (
    <>
      <div className="w-3/4 m-auto inset-x-0 relative -top-7 bg-white border-2 rounded-md">
        <div className="topnav h-20 flex items-center justify-between">
          <select
            className="border-2 xsm:w-5/12 xs:h-6 sm:w-24 sm:h-6 md:w-32 md:h-8 ml-2 rounded-md sm:text-base xs:text-sm xsm:text-xs"
            name="categories"
            id="category"
            onChange={onCategoryChange}
          >
            <option value="">Loại hình</option>
            <option value="nhapho">Nhà phố</option>
            <option value="nhacap4">Nhà cấp 4</option>
            <option value="datnen">Đất nền</option>
            <option value="bietthu">Biệt thự</option>
          </select>
          <select
            className="border-2 xsm:w-5/12 xs:h-6 sm:w-24 sm:h-6 md:h-8 md:w-32 mr-2 ml-2 rounded-md sm:text-base xs:text-sm xsm:text-xs"
            name="price"
            id="price"
            onChange={onPriceChange}
          >
            <option value="">Giá</option>
            <option value="500">Dưới 500 triệu</option>
            <option value="1ti">Dưới 1 tỷ</option>
            <option value="2ti">Dưới 2 tỉ</option>
            <option value="3ti">Dưới 3 tỉ</option>
            <option value="4ti">Dưới 4 tỉ</option>
            <option value="5ti">Dưới 5 tỉ</option>
            <option value="6ti">Dưới 6 tỉ</option>
            <option value="7ti">Dưới 7 tỉ</option>
            <option value="8ti">Dưới 8 tỉ</option>
            <option value="9ti">Dưới 9 tỉ</option>
            <option value="duoi15ti">Dưới 15 tỉ</option>
          </select>
          <select
            className="border-2 xsm:w-5/12 xs:h-6 sm:w-24 sm:h-6 md:h-8 md:w-32 rounded-md mr-2 ml-2 sm:text-base xs:text-sm xsm:text-xs"
            name="location"
            id="location"
            onChange={onGerionChange}
          >
            <option value="">Khu vực</option>
            <option value="vinhphu">Vĩnh Phú</option>
            <option value="thuanan">Thuận An</option>
            <option value="binhnham">Bình Nhâm</option>
            <option value="binhchuan">Bình Chuẩn</option>
            <option value="laithieu">Lái Thiêu</option>
          </select>
          <div
            onClick={onLocClick}
            className="mr-2 xsm:w-5/12 xs:h-6 sm:w-24 sm:h-6 md:w-32 md:h-8 bg-primary rounded-md flex justify-center items-center text-white sm:text-base xs:text-sm xsm:text-xs"
          >
            Lọc
          </div>
        </div>
      </div>
      {/* <div className="b bg-orange-600 h-4 w-5/6 ">
        <p>hahaha</p>
      </div> */}
    </>
  );
}

export default observer(MenuFilterComponent);
