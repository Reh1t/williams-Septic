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

  const onTAGHdLinkNormalContainerClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onServicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onProjectsTextClick = useCallback(() => {
    router.push("/project-gallery");
  }, [router]);

  const onContactButtonClick = useCallback(() => {
    router.push("/contact-us1");
  }, [router]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-xl text-black1 font-small-text ${className}`}
      style={tAGHeaderStyle}
    >
      <div className="self-stretch bg-white box-border flex flex-row items-center space-between pt-[29px] px-3 pb-[27px] max-w-full border-b-[1px] border-solid border-darkslategray-400 lg:flex-wrap">
        <div className="flex-1 flex flex-row items-center justify-start gap-[5.9px] max-w-full">
          <img
            className="h-[50.7px] w-[50.7px] relative object-cover"
            loading="lazy"
            alt=""
            src="/logo.png"
          />
          <b className="relative leading-[32px] mq450:text-base mq450:leading-[26px]">
            Williams Septic
          </b>
        </div>

        <nav
          className={`flex-1 flex flex-row items-center justify-center [row-gap:20px] max-w-full whitespace-nowrap text-left text-base-8 text-gray-400 font-small-text mq450:flex-wrap ${
            isOpen ? "lg:block" : "lg:hidden"
          } lg:block`}
        >
          <div
            className="flex flex-row items-center justify-center py-[7px] px-4 font-bold text-black cursor-pointer"
            onClick={onTAGHdLinkNormalContainerClick}
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
        </nav>
        <button
          className="flex-1 cursor-pointer py-2 px-[31px] bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex-row justify-end whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
          onClick={onContactButtonClick}
        >
          <a className="relative text-base-8 leading-[25.6px] font-bold font-small-text text-white text-center">
            Contact Us Today
          </a>
        </button>
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
