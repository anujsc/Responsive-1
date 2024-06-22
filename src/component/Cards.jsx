import React from "react";

function Cards() {

    const data=[
        {svg: <svg className=" h-[28px] w-[32px]"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_999)">
              <path
                d="M16 17C18.1733 17 20.0933 17.52 21.6533 18.2C23.0933 18.84 24 20.28 24 21.84V24H8V21.8533C8 20.28 8.90667 18.84 10.3467 18.2133C11.9067 17.52 13.8267 17 16 17ZM5.33333 17.3333C6.8 17.3333 8 16.1333 8 14.6667C8 13.2 6.8 12 5.33333 12C3.86667 12 2.66667 13.2 2.66667 14.6667C2.66667 16.1333 3.86667 17.3333 5.33333 17.3333ZM6.84 18.8C6.34667 18.72 5.85333 18.6667 5.33333 18.6667C4.01333 18.6667 2.76 18.9467 1.62667 19.44C0.64 19.8667 0 20.8267 0 21.9067V24H6V21.8533C6 20.7467 6.30667 19.7067 6.84 18.8ZM26.6667 17.3333C28.1333 17.3333 29.3333 16.1333 29.3333 14.6667C29.3333 13.2 28.1333 12 26.6667 12C25.2 12 24 13.2 24 14.6667C24 16.1333 25.2 17.3333 26.6667 17.3333ZM32 21.9067C32 20.8267 31.36 19.8667 30.3733 19.44C29.24 18.9467 27.9867 18.6667 26.6667 18.6667C26.1467 18.6667 25.6533 18.72 25.16 18.8C25.6933 19.7067 26 20.7467 26 21.8533V24H32V21.9067ZM16 8C18.2133 8 20 9.78667 20 12C20 14.2133 18.2133 16 16 16C13.7867 16 12 14.2133 12 12C12 9.78667 13.7867 8 16 8Z"
                fill="#8064A2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_999">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>,
          h1:"People",
          p1:"Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator",
        P2:"Connect"},
        {svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1010)">
            <path d="M16 2.66663C10.84 2.66663 6.66669 6.83996 6.66669 12C6.66669 19 16 29.3333 16 29.3333C16 29.3333 25.3334 19 25.3334 12C25.3334 6.83996 21.16 2.66663 16 2.66663ZM16 15.3333C14.16 15.3333 12.6667 13.84 12.6667 12C12.6667 10.16 14.16 8.66663 16 8.66663C17.84 8.66663 19.3334 10.16 19.3334 12C19.3334 13.84 17.84 15.3333 16 15.3333Z" fill="#77933C"/>
            </g>
            <defs>
            <clipPath id="clip0_1_1010">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>,
          h1:"Place",
          p1:"Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
        P2:"MeetUp"},
        {svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1020)">
            <path d="M22.9466 11.9998L17.1066 3.25312C16.8533 2.87978 16.4266 2.69312 16 2.69312C15.5733 2.69312 15.1466 2.87978 14.8933 3.26645L9.05331 11.9998H2.66665C1.93331 11.9998 1.33331 12.5998 1.33331 13.3331C1.33331 13.4531 1.34665 13.5731 1.38665 13.6931L4.77331 26.0531C5.07998 27.1731 6.10665 27.9998 7.33331 27.9998H24.6666C25.8933 27.9998 26.92 27.1731 27.24 26.0531L30.6266 13.6931L30.6666 13.3331C30.6666 12.5998 30.0666 11.9998 29.3333 11.9998H22.9466ZM12 11.9998L16 6.13311L20 11.9998H12ZM16 22.6664C14.5333 22.6664 13.3333 21.4664 13.3333 19.9998C13.3333 18.5331 14.5333 17.3331 16 17.3331C17.4666 17.3331 18.6666 18.5331 18.6666 19.9998C18.6666 21.4664 17.4666 22.6664 16 22.6664Z" fill="#C0504D"/>
            </g>
            <defs>
            <clipPath id="clip0_1_1020">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>,
          h1:"Products",
          p1:"Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
        P2:"Get it"},
        {svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1030)">
            <rect x="6.40002" y="10.4" width="19.2" height="15.2" fill="#0096C8"/>
            <path d="M21.3333 14.0399C20.9467 13.6532 20.3067 13.6532 19.92 14.0399L14.12 19.8399L12 17.7199C11.6133 17.3332 10.9733 17.3332 10.5867 17.7199C10.2 18.1065 10.2 18.7465 10.5867 19.1332L13.1733 21.7199C13.6933 22.2399 14.5333 22.2399 15.0533 21.7199L21.32 15.4532C21.72 15.0665 21.72 14.4265 21.3333 14.0399ZM25.3333 3.99986H24V2.66652C24 1.93319 23.4 1.33319 22.6667 1.33319C21.9333 1.33319 21.3333 1.93319 21.3333 2.66652V3.99986H10.6667V2.66652C10.6667 1.93319 10.0667 1.33319 9.33333 1.33319C8.6 1.33319 8 1.93319 8 2.66652V3.99986H6.66667C5.18667 3.99986 4.01333 5.19986 4.01333 6.66652L4 25.3332C4 26.7999 5.18667 27.9999 6.66667 27.9999H25.3333C26.8 27.9999 28 26.7999 28 25.3332V6.66652C28 5.19986 26.8 3.99986 25.3333 3.99986ZM24 25.3332H8C7.26667 25.3332 6.66667 24.7332 6.66667 23.9999V10.6665H25.3333V23.9999C25.3333 24.7332 24.7333 25.3332 24 25.3332Z" fill="#0096C8"/>
            <path d="M21.4367 13.89C21.05 13.5033 20.41 13.5033 20.0234 13.89L14.2234 19.69L12.1034 17.57C11.7167 17.1833 11.0767 17.1833 10.69 17.57C10.3034 17.9566 10.3034 18.5966 10.69 18.9833L13.2767 21.57C13.7967 22.09 14.6367 22.09 15.1567 21.57L21.4234 15.3033C21.8234 14.9166 21.8234 14.2766 21.4367 13.89Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1_1030">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            ,
          h1:"Program",
          p1:"Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
        P2:"Attend"}
    ]
  return (
    <div className="w-[360px] h-[720px] top-[800px] absolute">
      
      {data.map((item)=>(
        <div className="flex justify-center mt-4">
        <div className="w-[312px] flex flex-col gap-3 items-center h-[216px] border-2 border-[#CED4DA] rounded-lg">
          <div className="mt-[2.5vh] flex justify-center gap-2">
            <div  className=" h-[28px] w-[32px]">{item.svg}</div>
            <h1 className=" w-[62px] h-[27px] text-[18px] font-semibold leading-[27px]">{item.h1}</h1>
          </div>

          <div>
            <p className=" text-center w-[264px] h-[80px] font-light tracking-wide text-[12px] leading-[20px] ">{item.p1}</p>
          </div>

          <div className=" mt-1 flex justify-center items-center w-[264px] h-[32px] rounded-lg border-[2px] border-[#8064A2]">
                <p className="w-[53px] h-[16px] text-[#8064A2] tracking-wide font-semibold text-[12px] leading-[16px] ">{item.P2}</p>
          </div>
        </div>
      </div>

      ))}
    </div>
    
  );
}

export default Cards;


