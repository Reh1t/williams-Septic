import type { NextPage } from "next";
import IconBox from "./icon-box";
import FormField from "./form-field";
import Button1 from "./button1";

export type ContactType = {
  className?: string;
};

const Contact: NextPage<ContactType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-main-background flex flex-col items-start justify-start max-w-full text-left text-37xl text-variant-background font-body-3 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-[83px] px-5 box-border max-w-full">
        <div
          className="w-[1140px] flex flex-row flex-wrap items-center justify-start py-0 pl-0 pr-[390px] box-border gap-x-10 gap-y-9 max-w-full lg:pr-[195px] lg:box-border gap-[18px] mq750:pr-[97px] mq750:box-border mq450:pr-5 mq450:box-border"
          data-scroll-to="headingContainer"
        >
          <div className="h-px flex-1 relative border-lavender border-t-[1px] border-solid box-border max-w-full" />
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit] whitespace-nowrap">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-between py-[120px] px-[150px] box-border gap-5 max-w-full text-mid text-secondary lg:pl-[75px] lg:pr-[75px] lg:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:box-border mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border">
        <div className="w-[480px] flex flex-col items-start justify-start gap-8 max-w-full gap-4">
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="relative tracking-[0.15em] leading-[120%] uppercase font-medium whitespace-nowrap">
              Get Started
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[120%] font-bold font-[inherit] text-primary mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
              <p className="m-0">Get Connected with</p>
              <p className="m-0">{`Williams Septic `}</p>
              <p className="m-0">Today</p>
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
                infoContent="info@williamsseptic.ca"
              />
            </div>
          </div>
        </div>
        <div className="w-[520px] rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-col items-start justify-start py-[54px] px-16 box-border gap-9 max-w-full text-xl text-primary gap-[18px] mq750:py-[35px] mq750:px-8 mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-5">
            <FormField
              yourName="Your Name"
              enterYourNamePlaceholder="Enter Your Name"
            />
            <FormField
              yourName="Your Email"
              enterYourNamePlaceholder="Enter Your Email"
              propWidth="101px"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
              <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                Your Message
              </div>
              <textarea
                className="border-border-1 border-[1px] border-solid bg-white h-[150px] w-auto [outline:none] self-stretch rounded-8xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-3.5 px-[30px] font-body-3 font-medium text-sm text-gray-1"
                placeholder="Enter Your Message"
                rows={8}
                cols={20}
              />
            </div>
          </div>
          <Button1 />
        </div>
      </div>
    </section>
  );
};

export default Contact;
