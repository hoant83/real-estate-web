import { useState } from "react";

function AlertComponent({ display, setDisplay, infoValid, colorAlert }: any) {
  const onCloseClick = () => {
    setDisplay("none");
  };

  return (
    <>
      <div
        className="p-3 w-[300px] h-12 top-2 right-2 flex items-center text-sm absolute rounded-md "
        style={{ display: display, backgroundColor: colorAlert }}
      >
        <div className="flex justify-between items-center">
          <div className="fo font-bold text-white ">{infoValid}</div>
          <div
            className=" text-white font-bold text-[20px] hover:cursor-pointer "
            onClick={onCloseClick}
          >
            &times;
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertComponent;
