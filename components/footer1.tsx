import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type Footer1Type = {
  className?: string;
  williams20Logo3transparen?: string;
  buttonsIcon?: string;
  buttonsIcon1?: string;
  buttonsIcon2?: string;
  buttonsIcon3?: string;
};

const Footer1: NextPage<Footer1Type> = ({
  className = "",
  williams20Logo3transparen = "williams20logo3transparent20bgroundpng@2x.png",
  buttonsIcon = "/fb.png",
  buttonsIcon1 = "/li.png",
  buttonsIcon2 = "/ig.png",
  buttonsIcon3 = "/yt.png",
}) => {
  const router = useRouter();

  const onHomeClick = useCallback(() => {
    router.push("https://williams-plumbing-solutions.vercel.app/");
  }, [router]);

  const onSocialIconsContainerClick = useCallback(() => {
    window.open("https://ca.linkedin.com/in/williams-plumbing-solution");
  }, []);

  const onButtonsIconClick = useCallback(() => {
    window.open("https://www.facebook.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick1 = useCallback(() => {
    window.open("https://www.instagram.com/williamsplumbingsolution/");
  }, []);

  const onButtonsIconClick2 = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=HdwCDhqtFuQ");
  }, []);

  const onServiesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='service']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gallery']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWaterTextClick = useCallback(() => {
    router.push("https://williams-plumbing-solutions.vercel.app/water-treatment");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    router.push(      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
);
  }, [router]);

  const onBlogTextClick = useCallback(() => {
    router.push("https://blog-delta-three-74.vercel.app/");
  }, [router]);

  const onSepticButtonClick = useCallback(() => {
    router.push("https://williams-septic.vercel.app/");
  }, [router]);

  const onSolutionsButtonClick = useCallback(() => {
    router.push("https://williamssolutionpro.vercel.app/");
  }, [router]);

  const onExcavationButtonClick = useCallback(() => {
    router.push("https://williamsexcavation.vercel.app/");
  }, [router]);

  const onLoggingButtonClick = useCallback(() => {
    router.push("https://williamslogging.vercel.app/");
  }, [router]);

  return (
    <footer
      className={`self-stretch bg-whitesmoke-200 overflow-hidden flex flex-row flex-wrap items-start justify-between mq675:justify-start py-[38px] px-[26px] box-border gap-[12px] max-w-full text-left text-base text-black1 font-small-text ${className}`}
    >
      <div className="flex flex-col items-center justify-center py-0 px-2.5 box-border gap-[8px] max-w-full text-5xl">
        <div className="flex flex-row items-start justify-end py-0 pr-2.5 pl-[31px] shrink-0">
          <h3
            className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]"
            onClick={onSolutionsButtonClick}
          >
            Williams Solutions.Pro
          </h3>
        </div>
        <img
          className="w-[78px] h-[78px] relative object-contain cursor-pointer"
          alt=""
          src={williams20Logo3transparen}
          onClick={onSolutionsButtonClick}
        />
        <div
          className="flex flex-row items-start justify-start gap-[8px] cursor-pointer"
          onClick={onSocialIconsContainerClick}
        >
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            loading="lazy"
            alt=""
            src={buttonsIcon}
            onClick={onButtonsIconClick}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px]"
            alt=""
            src={buttonsIcon1}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            alt=""
            src={buttonsIcon2}
            onClick={onButtonsIconClick1}
          />
          <img
            className="h-10 w-10 relative rounded object-cover min-h-[40px] cursor-pointer"
            alt=""
            src={buttonsIcon3}
            onClick={onButtonsIconClick2}
          />
        </div>
      </div>
      <div className="w-[398px] flex flex-row items-start justify-between gap-[24px] max-w-full mq450:flex-wrap">
        <div className="flex flex-col items-start justify-center gap-[14px] min-w-[122px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-darkslategray-100">
            <div
              className="self-stretch relative leading-[150%] font-medium cursor-pointer"
              onClick={onHomeClick}
            >
              Plumbing Solutions
            </div>
            <div
              className="self-stretch relative leading-[150%] font-medium cursor-pointer"
              onClick={onWaterTextClick}
            >
              Water Treatment
            </div>
            <div
              className="self-stretch relative leading-[150%] font-medium cursor-pointer"
              onClick={onSepticButtonClick}
            >
              Septic
            </div>
            <div
              className="self-stretch relative leading-[150%] font-medium cursor-pointer"
              onClick={onExcavationButtonClick}
            >
              Excavation
            </div>
            <div
              className="self-stretch relative leading-[150%] font-medium cursor-pointer"
              onClick={onLoggingButtonClick}
            >
              Logging
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[14px] min-w-[122px]">
          <div
            className="self-stretch relative leading-[150%] font-medium cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About
          </div>
          <div
            className="self-stretch relative leading-[150%] font-medium cursor-pointer"
            onClick={onServiesTextClick}
          >
            Importance
          </div>
          <div
            className="self-stretch relative leading-[150%] font-medium cursor-pointer"
            onClick={onProjectTextClick}
          >
            Projects
          </div>
          <div
            className="self-stretch relative leading-[150%] font-medium cursor-pointer"
            onClick={onContactUsTextClick}
          >
            Contact Us
          </div>
          <div
            className="self-stretch relative leading-[150%] font-medium cursor-pointer"
            onClick={onBlogTextClick}
          >
            Blog
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start py-0 px-3 box-border gap-[20px] min-w-[307px] max-w-full text-base-8 text-darkslategray-300">
        <div className="flex flex-col items-start justify-start gap-[8px] ">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-10 pl-0 box-border gap-[34px] max-w-full mq450:flex-wrap mq450:gap-8 mq825:mt-7">
            <div className="w-6 overflow-hidden shrink-0 flex flex-col items-start justify-start py-px pr-[3px] pl-px box-border">
              <img
                className="w-[19.5px] h-[18.5px] relative"
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <div className="relative leading-[26px] font-semibold whitespace-pre-wrap inline-block min-w-[149px] max-w-full">
              Call Us: 705-492-8910
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[38px] pl-0 box-border gap-[22px] max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start p-0.5">
              <img
                className="w-[33.3px] h-[21.9px] relative"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] min-w-[227px] max-w-full mq450:flex-wrap">
              <div className="relative leading-[25.6px] font-semibold inline-block min-w-[70.4px]">
                Email Us:
              </div>
              <div className="relative leading-[25.6px] font-semibold whitespace-nowrap">
                info@williamssolutions.pro
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative leading-[150%] items-end">
          © Williams Solutions.Pro 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
