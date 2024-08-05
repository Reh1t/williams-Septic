import type { NextPage } from "next";
import { useCallback } from "react";
import { onSubscribeButtonClick } from "./handleNewsletter";
export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const onSocialIconsContainerClick = useCallback(() => {
    window.open("https://ca.linkedin.com/in/williams-plumbing-solution");
  }, []);

  const onButtonsIconClick = useCallback(() => {
    window.open("https://www.facebook.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick1 = useCallback(() => {
    window.open("https://www.instagram.com/williamsplumbingsolution/");
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='headingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer
      className={`self-stretch [background:linear-gradient(#f5f6f7,_#f5f6f7),_#fbfdfe] overflow-y-auto flex flex-row items-start justify-center py-[30px] px-5 box-border max-w-full text-left text-5xl text-dark-blue font-heading-heading-5 mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-1 box-border gap-x-20 gap-y-[78.7px] max-w-full gap-10">
        <div className="w-[234px] flex flex-col items-start justify-start pt-0 px-0 pb-[72px] box-border gap-8 text-base text-gray-500 font-body-body-2">
          <h3 className="m-0 relative text-5xl leading-[32px] font-bold font-heading-heading-5 text-dark-blue mq450:text-lgi mq450:leading-[26px]">
            Williams Septic
          </h3>
          <div className="self-stretch relative leading-[24px]">
            705-492-8910
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-12">
            <div className="self-stretch relative leading-[24px] whitespace-nowrap">
              info@williamsseptic.ca
            </div>
            <div
              className="flex flex-row items-start justify-start gap-spacing-xs cursor-pointer"
              onClick={onSocialIconsContainerClick}
            >
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
                loading="lazy"
                alt=""
                src="/buttons--icon@2x.png"
                onClick={onButtonsIconClick}
              />
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px]"
                loading="lazy"
                alt=""
                src="/buttons--icon-1@2x.png"
              />
              <img
                className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
                loading="lazy"
                alt=""
                src="/buttons--icon-2@2x.png"
                onClick={onButtonsIconClick1}
              />
            </div>
          </div>
          <div className="w-6 h-6 relative hidden" />
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
          <h3 className="m-0 relative text-inherit leading-[32px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
            Williams Services
          </h3>
          <div className="flex flex-col items-start justify-start gap-6 text-base text-gray-500 font-body-body-2">
            <a
              className="relative leading-[24px] text-[inherit] inline-block [text-decoration:none] min-w-[127px]"
              href={`https://williams-plumbing-solutions.vercel.app/more-u-v-water-purification`}
              target="_blank"
            >
              Water Treatment
            </a>
            <div className="relative leading-[24px] inline-block min-w-[48px]">
              Septic
            </div>
            <a
              className="relative leading-[24px] text-[inherit] [text-decoration:none]"
              href={`https://williams-plumbing-solutions.vercel.app/`}
              target="_blank"
            >
              Plumbing Solutions
            </a>
            <a
              className="relative leading-[24px] text-[inherit] inline-block [text-decoration:none] min-w-[46px]"
              href={`https://williams-plumbing-solutions.vercel.app/about-us`}
              target="_blank"
            >
              About
            </a>
            <div
              className="relative leading-[24px] inline-block min-w-[61px] cursor-pointer"
              onClick={onContactTextClick}
            >
              Contact
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
          <h3 className="m-0 relative text-inherit leading-[32px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
            Community
          </h3>
          <div className="flex flex-col items-start justify-start gap-6 text-base text-gray-500 font-body-body-2">
            <div className="relative leading-[24px] inline-block min-w-[34px]">{`Blog `}</div>
            <div className="relative leading-[24px] inline-block min-w-[97px]">
              Social Media
            </div>
            <div className="relative leading-[24px] inline-block min-w-[51px]">
              Events
            </div>
          </div>
        </div>
        <div className="w-[424px] flex flex-col items-start justify-center gap-[78px] max-w-full text-11xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full">
            <div className="flex flex-col items-start justify-start gap-1.5 max-w-full">
              <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[40px] font-normal font-[inherit] mq450:text-lg mq450:leading-[24px] mq1050:text-5xl mq1050:leading-[32px]">
                Sign up for our
              </h2>
              <div className="flex flex-row items-start justify-start gap-2.5 mq450:flex-wrap">
                <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[40px] font-bold font-[inherit] mq450:text-lg mq450:leading-[24px] mq1050:text-5xl mq1050:leading-[32px]">{`WilliamsWater `}</h2>
                <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[40px] font-normal font-[inherit] mq450:text-lg mq450:leading-[24px] mq1050:text-5xl mq1050:leading-[32px]">
                  Newsletter
                </h2>
              </div>
            </div>
            <form onSubmit={onSubscribeButtonClick} className="self-stretch flex flex-col items-center justify-center gap-6">
              <div className="self-stretch border-dark-blue-10 border-b-[1px] border-solid flex flex-row items-center justify-start pt-0 px-0 pb-3.5">
                <input
                  className="w-[205px] [border:none] [outline:none] font-body-body-2 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-600 text-left inline-block p-0"
                  placeholder="Enter your email address ..."
                  type="email"
                  defaultValue={""}
                  id="newsLetterEmail"
                  required
                />
              </div>
              <button type="submit" className="cursor-pointer [border:none] py-2.5 px-5 bg-dark-blue self-stretch flex flex-row items-center justify-center hover:bg-slategray">
                <b className="relative text-base leading-[24px] inline-block font-heading-heading-5 text-white text-left min-w-[79px]">
                  Subscribe
                </b>
              </button>
            </form>
          </div>
          <div className="relative text-base leading-[24px] font-body-body-2 text-center">
            © Williams Plumbing Solutions 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
