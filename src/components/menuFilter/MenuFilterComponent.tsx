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
            <option value="">Lo???i h??nh</option>
            <option value="nhapho">Nh?? ph???</option>
            <option value="nhacap4">Nh?? c???p 4</option>
            <option value="datnen">?????t n???n</option>
            <option value="bietthu">Bi???t th???</option>
          </select>
          <select
            className="border-2 xsm:w-5/12 xs:h-6 sm:w-24 sm:h-6 md:h-8 md:w-32 mr-2 ml-2 rounded-md sm:text-base xs:text-sm xsm:text-xs"
            name="price"
            id="price"
            onChange={onPriceChange}
          >
            <option value="">Gi??</option>
            <option value="500">D?????i 500 tri???u</option>
            <option value="1ti">D?????i 1 t???</option>
            <option value="2ti">D?????i 2 t???</option>
            <option value="3ti">D?????i 3 t???</option>
            <option value="4ti">D?????i 4 t???</option>
            <option value="5ti">D?????i 5 t???</option>
            <option value="6ti">D?????i 6 t???</option>
            <option value="7ti">D?????i 7 t???</option>
            <option value="8ti">D?????i 8 t???</option>
            <option value="9ti">D?????i 9 t???</option>
            <option value="duoi15ti">D?????i 15 t???</option>
          </select>
          <select
            className="border-2 xsm:w-5/12 xs:h-6 sm:w-24 sm:h-6 md:h-8 md:w-32 rounded-md mr-2 ml-2 sm:text-base xs:text-sm xsm:text-xs"
            name="location"
            id="location"
            onChange={onGerionChange}
          >
            <option value="">Khu v???c</option>
            <option value="vinhphu">V??nh Ph??</option>
            <option value="thuanan">Thu???n An</option>
            <option value="binhnham">B??nh Nh??m</option>
            <option value="binhchuan">B??nh Chu???n</option>
            <option value="laithieu">L??i Thi??u</option>
          </select>
          <div
            onClick={onLocClick}
            className="mr-2 xsm:w-5/12 xs:h-6 sm:w-24 sm:h-6 md:w-32 md:h-8 bg-primary rounded-md flex justify-center items-center text-white sm:text-base xs:text-sm xsm:text-xs"
          >
            L???c
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
