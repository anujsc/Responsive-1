import React from "react";

function Addurown() {
  return (
    <div className=" w-[360px] h-[332px] top-[1800px] absolute bg-[#F7FDFF] lg:w-[1440px] lg:h-[484px] lg:top-[1576px] lg:absolute">
      <div className="">
        <div className="w-[312px] h-[236px] top-[48px] left-[24px] absolute border-2 border-[#ced4da] rounded-lg flex flex-col  justify-center gap-3 items-center lg:items-start lg:w-[1240px] lg:h-[284px] lg:top-[100px] lg:left-[100px] lg:absolute  ">
          <div className=" flex justify-center  ">
            <div className="mt-[2.3vh] h-[32px] lg:ml-[5vh] w-[32px] lg:h-[3.33px] lg:w-[3.33px] lg:top-[3.33px] lg:left-[3.33px] lg:absolute ">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1044)">
                  <path
                    d="M16 2.66663C8.64002 2.66663 2.66669 8.63996 2.66669 16C2.66669 23.36 8.64002 29.3333 16 29.3333C23.36 29.3333 29.3334 23.36 29.3334 16C29.3334 8.63996 23.36 2.66663 16 2.66663ZM21.3334 17.3333H17.3334V21.3333C17.3334 22.0666 16.7334 22.6666 16 22.6666C15.2667 22.6666 14.6667 22.0666 14.6667 21.3333V17.3333H10.6667C9.93335 17.3333 9.33335 16.7333 9.33335 16C9.33335 15.2666 9.93335 14.6666 10.6667 14.6666H14.6667V10.6666C14.6667 9.93329 15.2667 9.33329 16 9.33329C16.7334 9.33329 17.3334 9.93329 17.3334 10.6666V14.6666H21.3334C22.0667 14.6666 22.6667 15.2666 22.6667 16C22.6667 16.7333 22.0667 17.3333 21.3334 17.3333Z"
                    fill="#0096C8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1044">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className=" mt-5 w-[126px] h-[27px] lg:ml-[5vh] text-[18px] lg:w-[168px] lg:h-[36px] lg:text-[24px] lg:top-[2px] lg:left-[64px] lg:absolute font-semibold leading-[27px]">
              Add your own
            </h1>
          </div>

          <div>
            <p className="lg:ml-[5vh] lg:mt-3 text-center w-[264px] h-[100px] lg:text-start lg:w-[1160px] lg:h-[60px] font-light tracking-wide lg:tracking-tight text-[12px] lg:text-[18px] leading-[20px]  lg:leading-[30px] ">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
          </div>

          <div className="text lg:ml-[5vh] mt-[3.6vh] flex justify-center items-center w-[122px] h-[40px] rounded-lg border-[2px] border-[#8064A2]">
            <p className="w-[66px] h-[16px] text-[#8064A2] tracking-wide font-semibold text-[14px] leading-[16px] ">
              Add new
            </p>
          </div>

          <div className=" lg:hidden mt-1 flex justify-center items-center w-[264px] h-[32px] rounded-lg border-[2px] border-[#8064A2]">
            <p className="w-[58px] h-[16px] text-[#8064A2] tracking-wide font-semibold text-[12px] leading-[16px] ">
              Add new
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addurown;
