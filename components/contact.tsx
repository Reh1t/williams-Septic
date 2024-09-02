import type { NextPage } from "next";
import IconBox from "./icon-box";
import { useCallback, useEffect } from "react";
import router from "next/router";

export type ContactType = {
  className?: string;
};

const Contact: NextPage<ContactType> = ({ className = "" }) => {
  
  const onContactButtonClick = useCallback(() => {
    router.push(
      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
    );
  }, [router]);


  return (
    <section
      className={`self-stretch bg-main-background flex flex-col items-center justify-center max-w-full text-left text-37xl text-variant-background font-body-3 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-[83px] px-5 box-border max-w-full">
        <div
          className="w-[1140px] flex flex-row flex-wrap items-center justify-start py-0 pl-0 pr-[390px] box-border gap-x-10 gap-y-9 max-w-full lg:pr-[195px] lg:box-border gap-[18px] mq750:pr-[97px] mq750:box-border mq450:pr-5 mq450:box-border"
          data-scroll-to="contactUsContainer"
        >
          <div className="h-px flex-1 relative border-lavender border-t-[1px] border-solid box-border max-w-full" />
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit] whitespace-nowrap">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-[120px] px-[150px] box-border gap-5 max-w-full text-mid text-secondary lg:pl-[75px] lg:pr-[75px] lg:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border">
        <div className="w-[480px] flex flex-col items-start justify-start gap-8 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium whitespace-nowrap">
              Get Started
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-[inherit] text-primary mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
              <p className="m-0">{`Get Connected with
              Williams Septic
              Today`}</p>
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-5xl text-primary">
            <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[23px]">
              Contact Info
            </h3>
            <div className="self-stretch h-px relative border-border-1 border-t-[1px] border-solid box-border" />
            <div className="w-[336px] flex flex-col items-start justify-start gap-5 max-w-full text-xl">
              <IconBox
                phone="/phone.svg"
                phoneNumber="Phone Number"
                infoContent="(705) 492-8910"
              />
              <IconBox
                phone="/phone1.svg"
                phoneNumber="Email Address"
                infoContent="info@williamssolutions.pro"
              />
            </div>
          </div>
        </div>
        <div className="w-[480px] flex flex-col items-center justify-center">
        <button
          className="cursor-pointer py-10 px-10 ml-10 mb-10 bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
          onClick={onContactButtonClick}
        >
          <a className="relative text-8xl leading-[25.6px] font-bold font-small-text text-white text-center">
            Contact Us Here
          </a>
        </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
