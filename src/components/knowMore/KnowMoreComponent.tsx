function KnowMoreComponent() {
  return (
    <>
      <div className="lg:flex xsm:block lg:py-16 lg:px-32 xsm:py-5 sm:px-8 xsm:px-4 lg:justify-between xsm:justify-items-center items-center">
        <div className="t text-center m-auto ">
          <img
            className="lg:w-[80%] xsm:w-[100%] rounded-md m-auto"
            src="https://anhbinhminh.info/wp-content/uploads/2021/08/IMG_5654_tn.jpg"
            alt="house"
          />
          <img
            className="xl:w-72 xl:h-40 lg:w-60 lg:h-32  xs:w-72 xs:h-40 xsm:w-40 xsm:h-24 absolute lg:-mt-20 lg:-ml-20 xsm:-mt-20 xsm:-ml-8 rounded-md border-2"
            src="https://smilyhomes.com/wp-content/uploads/2022/05/house.jpg"
            alt="housesub"
          />
        </div>
        <div className="lg:mt-0 xsm:mt-20">
          <h1 className="font-[700] text-2xl">
            Giúp mọi người để tìm ngôi nhà cho họ
          </h1>
          <br></br>
          <p>
            Chúng tôi đề nghị theo nhu cầu khi khách hàng quan tâm về nó, chúng
            tôi có thể tư vấn để giúp bạn tìm được ngôi nhà phù hợp nhất, những
            đề nghị sẽ được đưa ra dựa trên kinh nghiệm nhiều năm đút kết của
            chúng tôi.Chúng tôi đề nghị theo nhu cầu khi khách hàng quan tâm về
            nó, chúng tôi có thể tư vấn để giúp bạn tìm được ngôi nhà phù hợp
            nhất.
          </p>
          <br></br>
          <div className="mr-2 xsm:w-5/12 xsm:h-6 sm:w-24 sm:h-6 md:w-32 md:h-8 bg-primary rounded-md flex justify-center items-center text-white sm:text-base xs:text-sm xsm:text-xs">
            Xem thêm
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowMoreComponent;
