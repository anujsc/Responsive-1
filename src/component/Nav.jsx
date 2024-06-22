import React from "react";

function Nav() {
  return (
    <div className="h-[48px] w-[360px] lg:h-[80px] lg:w-[1440px] ">
      <div className=" lg:w-[293.26px] lg:h-[60px] lg:top-[10px] lg:left-[97px] lg:absolute absolute h-[32px] w-[156.4px] top-[8px] left-[22px]">
        <img
          className="  "
          src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJ1oSBfJTmdqRIDA-g0cFKb8FFwhZcyHwpcMzk-a596zH3qy6jN~whBpS5iRacCGZhA1qbydqM~vD9Ri51TnChGVRGfyYM-OIduFL20IvHyuycgOTkNGloG~oh9UNvw7hwtdPFWEI5CjwWhGxlqV4GP9DiHM3Kca2e1eSAx6cYK1Xa-iV3rR-ghHPWcAbtJfIu8NNUcx2SiuzGZ-D2rjo6sJCyQdAYbPcO~F1az2aHX3GN6JrNt04ZKAXrGPWfOK8hqYBGSXmHAZ45zJc4VvInm75oQHJHo6sf5-ETV-ZWcsyLYCQ6jo6vrO43NyvUxpR05WMgx7UK-g0AL86Na~8A__"
          alt=""
        />
      </div>

      <div className=" search">
        <div className=""><img className=" lg:h-[40px] lg:absolute lg:w-[300px] lg:top-[20px] lg:left-[425px] lg:border-[1px]" src="src/assets/Images/SearchBox.png" alt="" /></div>
        <div className=" lg:h-[24px] w-[107px] top-[28px] left-[815px] border-[1px] absolute">
          <img src="src/assets/Images/Group 2.png" alt="" />
        </div>
        <div className=" lg:h-[24px] w-[114px] top-[28px] left-[946px] border-[1px] absolute">
          <img src="src/assets/Images/Group 3.png" alt="" />
        </div>

        <div className=" lg:h-[24px] w-[24px] top-[28px] left-[1084px] absolute">
          <img src="src/assets/Images/bookmark_black_24dp 1.png" alt="" />
        </div>

        <div className=" lg:h-[24px] w-[24px] top-[28px] left-[1132px] absolute">
          <img src="src/assets/Images/notifications_black_24dp 1 (1).png" alt="" />
        </div>

        <div className=" lg:h-[24px] w-[24px] top-[28px] left-[1180px] absolute">
          <img src="src/assets/Images/Product 3.png" alt="" />
        </div>

        <div className=" lg:h-[40px] w-[112px] top-[20px] left-[1228px] rounded-xl border-[1px] absolute">
          <img src="src/assets/Images/Group 71.png" alt="" />
        </div>
      </div>

      <div className=" lg:hidden">
        <div className="absolute w-[24px] h-[24px] top-[12px] left-[232px] ">
          <img src="src/assets/Images/Vector.png" alt="" />
        </div>

        <div className=" h-[24px] w-[24px] top-[9px] left-[272px] absolute">
          <img src="src/assets/Images/notifications_black_24dp 1.png" alt="" />
        </div>

        <div className=" absolute w-[24px] h-[24px] top-[9px] left-[312px]">
          <img src="src/assets/Images/menu_black_24dp 1.png" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Nav;


