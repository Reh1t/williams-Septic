import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback, useState } from "react";
import { useRouter } from "next/router";

export type Header1Type = {
  className?: string;

  /** Style props */
  navHEADERAlignSelf?: CSSProperties["alignSelf"];
  navHEADERFlex?: CSSProperties["flex"];
};

const Header1: NextPage<Header1Type> = ({
  className = "",
  navHEADERAlignSelf,
  navHEADERFlex,
}) => {
  const tAGHeaderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: navHEADERAlignSelf,
      flex: navHEADERFlex,
    };
  }, [navHEADERAlignSelf, navHEADERFlex]);

  const router = useRouter();

  const onAbooutClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='serviceContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='galleryContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onContactButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-xl text-black1 font-small-text ${className}`}
      style={tAGHeaderStyle}
    >
      <div className="self-stretch bg-white box-border flex flex-row items-center pt-[29px] px-3 pb-[27px] max-w-full border-b-[1px] border-solid border-darkslategray-400 lg:flex-wrap">
        <div className="flex-1 flex flex-row items-center gap-[5.9px] max-w-full">
          <img
            className="h-[50.7px] w-[50.7px] relative object-cover"
            loading="lazy"
            alt=""
            src="/septiclogo.png"
          />
          <b className="relative leading-[32px] mq450:text-base mq450:leading-[26px]">
            Williams Septic
          </b>
        </div>

        <nav
          className={`flex-1 flex flex-row items-center justify-end [row-gap:20px] max-w-full whitespace-nowrap text-left text-base-8 text-gray-400 font-small-text mq450:flex-wrap gap-[15px] ${
            isOpen ? "lg:block" : "lg:hidden"
          } lg:block`}
        >
          <div className="flex lg:flex-col items-center justify-center">
            <div
              className="flex flex-row items-center justify-center py-[7px] px-4 font-bold text-black cursor-pointer"
              onClick={onAbooutClick}
            >
              <a className="relative leading-[26px] text-[inherit] inline-block">
                About
              </a>
            </div>
            <div className="flex flex-row items-center justify-center py-[7px] px-[15px] box-border font-bold text-black">
              <a
                className="relative leading-[26px] text-[inherit] inline-block min-w-[65px] cursor-pointer"
                onClick={onServicesTextClick}
              >
                Services
              </a>
            </div>
            <div className="flex flex-row items-center justify-center py-[7px] px-[15px] box-border font-bold text-black">
              <a
                className="relative leading-[26px] text-[inherit] inline-block cursor-pointer"
                onClick={onProjectsTextClick}
              >
                Gallery
              </a>
            </div>
            <div className="flex flex-row items-center justify-center py-[7px] px-4 font-bold text-black cursor-pointer">
              <a className="relative leading-[26px] text-[inherit] inline-block min-w-[39px] cursor-pointer">
                Blog
              </a>
            </div>
          </div>
          <button
            className="flex lg:flex-col items-center justify-center cursor-pointer bg-blue-400 md:ml-24 px-6 py-2 bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-full whitespace-nowrap border-none hover:bg-blue-700 hover:box-border hover:border-[1px]"
            onClick={onContactButtonClick}
          >
            <a className="relative text-base-8 leading-[25.6px] font-bold font-small-text text-white text-center">
              Contact Us Today
            </a>
          </button>
        </nav>
        <button
          className="hidden lg:block text-black bg-transparent"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              color={isOpen ? "red" : "black"}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header1;
