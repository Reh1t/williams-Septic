import type { NextPage } from "next";
import IconBox from "./icon-box";
import FormField from "./form-field";
import { handleFormSubmit } from "./handleContactForm";

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
                infoContent="info@williamsseptic.ca"
              />
            </div>
          </div>
        </div>
        <div className="w-[520px] mx-auto rounded-3xs bg-main-background overflow-hidden shrink-0 flex flex-col items-start justify-center py-[54px] px-16 box-border gap-9 max-w-full text-xl text-primary mq750:py-[35px] mq750:px-8 mq750:box-border">
          <div className="flex-1 flex flex-col items-center justify-center gap-[24px] min-w-[346px] max-w-full mq750:min-w-full">
            <form onSubmit={handleFormSubmit} className="w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-base">
                <div className="self-stretch flex flex-row items-center justify-start gap-[32px] mq750:flex-wrap mq750:gap-[16px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[162px]">
                    <div className="self-stretch relative leading-[150%] font-medium">
                      Your name
                    </div>
                    <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-row items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-gainsboro-200">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray-200 text-left inline-block min-w-[131px] p-0"
                        placeholder="Jane"
                        id="first_name"
                        type="text"
                        defaultValue={""}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Email address
                  </div>
                  <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white box-border flex flex-row items-start justify-start py-2.5 px-[15px] max-w-full border-[1px] border-solid border-gainsboro-200">
                    <input
                      className="w-full [border:none] [outline:none] font-medium font-small-text text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-gray-200 text-left inline-block min-w-[250px] whitespace-nowrap max-w-full p-0"
                      placeholder="email@janesfakedomain.net"
                      id="email"
                      defaultValue={""}
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[150%] font-medium">
                    Your message
                  </div>
                  <textarea
                    className="bg-white h-[162px] w-auto [outline:none] self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg box-border flex flex-row items-start justify-start py-3 px-4 font-medium text-base text-gray-200 border-[1px] border-solid border-gainsboro-200"
                    placeholder="Enter your question or message"
                    id="project_details"
                    defaultValue={""}
                    required
                    rows={8}
                    cols={27}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start">
                  <button className="cursor-pointer [border:none] py-2 px-6 bg-black shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg flex flex-row items-center hover:bg-darkslategray-200">
                    <div className="relative text-xl leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[68px] mq450:text-base mq450:leading-[24px]">
                      Submit
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
