import { useState } from "react";
import vImg from "../../assets/image/vnew.png";
function AnswerAndQuestion() {
  const [displayAnswer1, setDisplayAnswer1] = useState<string>("none");
  const [displayAnswer2, setDisplayAnswer2] = useState<string>("none");
  const [displayAnswer3, setDisplayAnswer3] = useState<string>("none");
  const [displayAnswer4, setDisplayAnswer4] = useState<string>("none");
  const onOpenAnswer1 = () => {
    if (displayAnswer1 === "none") {
      setDisplayAnswer1("block");
    } else {
      setDisplayAnswer1("none");
    }
  };
  const onOpenAnswer2 = () => {
    if (displayAnswer2 === "none") {
      setDisplayAnswer2("block");
    } else {
      setDisplayAnswer2("none");
    }
  };
  const onOpenAnswer3 = () => {
    if (displayAnswer3 === "none") {
      setDisplayAnswer3("block");
    } else {
      setDisplayAnswer3("none");
    }
  };
  const onOpenAnswer4 = () => {
    if (displayAnswer4 === "none") {
      setDisplayAnswer4("block");
    } else {
      setDisplayAnswer4("none");
    }
  };
  return (
    <>
      <br></br>
      <div className="md:px-32 sx:px-28 xs:px-12 xsm:px-4">
        <div className="mb-4">
          <h1 className="text-center font-[700] text-2xl ">
            Những câu hỏi chúng tôi hay gặp
          </h1>
        </div>
        <form>
          <div
            onClick={onOpenAnswer1}
            className="h-auto w-full border-2 shadow-md rounded-md p-2 flex justify-between"
          >
            <p>Giấy tờ có pháp lý rõ ràng không?</p>
            <img src={vImg} className="w-3 h-4" alt="cau1" />
          </div>
          <div
            className="h-auto w-full border-2 shadow-md rounded-md p-2"
            style={{ display: displayAnswer1 }}
          >
            <p className="text-primary">
              Trước khi tiến hành đặt cọc, quý khách có thể đến ra UBND phường
              gần nhất để đối chiếu.
            </p>
          </div>
          <br></br>
          <div
            onClick={onOpenAnswer2}
            className="h-auto w-full border-2 shadow-md rounded-md p-2 flex justify-between"
          >
            <p>Tôi mua bao lâu thì có sổ đỏ?</p>
            <img src={vImg} className="w-3 h-4" alt="cau2" />
          </div>

          <div
            className="h-auto w-full border-2 shadow-md rounded-md p-2"
            style={{ display: displayAnswer2 }}
          >
            <p className="text-primary">
              Thông thường giấy tờ nhà đất sẽ có sau khoảng 1 năm.
            </p>
          </div>
          <br></br>
          <div
            onClick={onOpenAnswer3}
            className="h-auto w-full border-2 shadow-md rounded-md p-2 flex justify-between"
          >
            <p>Quy trình mua bán như thế nào?</p>
            <img src={vImg} className="w-3 h-4" alt="cau3" />
          </div>

          <div
            className="h-auto w-full border-2 shadow-md rounded-md p-2"
            style={{ display: displayAnswer3 }}
          >
            <p className="text-primary">
              Đầu tiên đi xem nhà, sau đó đặt cọc, cuối cùng ra công chứng.
            </p>
          </div>
          <br></br>
          <div
            onClick={onOpenAnswer4}
            className="h-auto w-full border-2 shadow-md rounded-md p-2 flex justify-between"
          >
            <p>Tôi có thể tin tưởng Anh/Chị được không?</p>
            <img src={vImg} className="w-3 h-4" alt="cau4" />
          </div>

          <div
            className="h-auto w-full border-2 shadow-md rounded-md p-2"
            style={{ display: displayAnswer4 }}
          >
            <p className="text-primary">
              Chúng tôi không làm việc 1 mình, mọi việc chúng tôi đều thông qua
              hợp đồng tự nguyện của 2 bên.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default AnswerAndQuestion;
