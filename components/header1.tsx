import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback, useState } from "react";
import { useRouter } from "next/router";

export type Header1Type = {
  className?: string;

  /** Style props */
  navHEADERAlignSelf?: CSSProperties["alignSelf"];
  navHEADERFlex?: CSSProperties["flex"];

  name1?: string;
  name2?: string;
};

const Header1: NextPage<Header1Type> = ({
  className = "",
  navHEADERAlignSelf,
  navHEADERFlex,
  name1 = "Septic",
  name2 = "Services",
}) => {
  const tAGHeaderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: navHEADERAlignSelf,
      flex: navHEADERFlex,
    };
  }, [navHEADERAlignSelf, navHEADERFlex]);

  const router = useRouter();

  const onSolutionClick = useCallback(() => {
    router.push("https://williamssolutionpro.vercel.app/");
  }, [router]);

  const onHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onplumbingClick = useCallback(() => {
    router.push("https://williams-plumbing-solutions.vercel.app/");
  }, [router]);

  const onTAGHdLinkNormalContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gallery']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='service']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWaterTextClick = useCallback(() => {
    router.push(
      "https://williams-plumbing-solutions.vercel.app/water-treatment"
    );
  }, [router]);

  const onContactButtonClick = useCallback(() => {
    router.push(      "https://clienthub.getjobber.com/client_hubs/c6ab68fa-74c2-4d46-9066-ff2210b88264/public/work_request/new?source=social_media"
);
  }, [router]);

  const onWilliamsButtonClick = useCallback(() => {
    router.push("https://williams-septic.vercel.app/");
  }, [router]);

  const onExcavationButtonClick = useCallback(() => {
    router.push("https://williamsexcavation.vercel.app/");
  }, [router]);

  const onLoggingButtonClick = useCallback(() => {
    router.push("https://williamslogging.vercel.app/");
  }, [router]);

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let closeTimeout: NodeJS.Timeout;

  const handleMenuClick = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Update the `openMenu` and `closeMenu` functions to handle both the hamburger and dropdown menus
  const openMenu = () => {
    clearTimeout(closeTimeout);
    setIsOpen(true);
  };

  const closeMenu = () => {
    closeTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };
  // Add new functions to handle the dropdown menu on small screens
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openDropdown = () => {
    clearTimeout(closeTimeout);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-col items-start justify-start max-w-full text-left text-xl text-black1 font-small-text ${className}`}
      style={tAGHeaderStyle}
    >
      <div className="self-stretch bg-white box-border flex flex-row items-center pt-[29px] px-3 pb-[27px] max-w-full border-b-[1px] border-solid border-darkslategray-400 lg:flex-wrap">
        <div className="flex-1 flex flex-row items-center justify-start gap-[5.9px] max-w-full">
          <img
            className="h-[50.7px] w-[50.7px] relative object-cover"
            loading="lazy"
            alt=""
            src="/williams20logo3transparent20bgroundpng@2x.png"
            onClick={onSolutionClick}
          />
          <b
            className="relative leading-[32px] mq450:text-base mq450:leading-[26px] cursor-pointer"
            onClick={onSolutionClick}
          >
            Williams Solutions.Pro
          </b>
        </div>

        <nav
          className={`flex-1 flex flex-row items-center justify-center px-5 [row-gap:20px] max-w-full whitespace-nowrap text-left text-base-8 text-gray-400 font-small-text mq450:flex-wrap ${
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
              Importance
            </a>
          </div>
          <div className="flex flex-row items-center justify-center py-[7px] px-[15px] box-border font-bold text-black">
            <a
              className="relative leading-[26px] text-[inherit] inline-block min-w-[65px] cursor-pointer"
              onClick={onProjectContainerClick}
            >
              Projects
            </a>
          </div>
          <div
            className="relative"
            onMouseEnter={!isOpen ? openDropdown : undefined}
            onMouseLeave={!isOpen ? closeDropdown : undefined}
          >
            <div
              className="flex flex-row items-center justify-center py-[7px] px-4 font-bold text-black cursor-pointer"
              onClick={isOpen ? handleDropdownClick : undefined} // Toggle dropdown on click for small screens
            >
              <a className="relative leading-[26px] text-[inherit] inline-block min-w-[39px]">
                Williams Services
                <img
                  className="relative w-3 h-3 ml-3"
                  src="/down-arrow.png"
                  alt="down arrow"
                />
              </a>
            </div>
            <div
              className={`absolute top-full left-0 bg-white shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-lg z-10 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
              onMouseEnter={!isOpen ? openDropdown : undefined}
              onMouseLeave={!isOpen ? closeDropdown : undefined}
            >
              <div className="flex flex-col items-start justify-start py-2 px-4 gap-[8px]">
                <a
                  className="relative leading-[26px] text-[inherit] inline-block min-w-[39px] cursor-pointer"
                  onClick={onplumbingClick}
                >
                  Plumbing Solution
                </a>
                <a
                  className="relative leading-[26px] text-[inherit] inline-block min-w-[39px] cursor-pointer"
                  onClick={onWaterTextClick}
                >
                  Water Treatment
                </a>
                <a
                  className="relative leading-[26px] text-[inherit] inline-block min-w-[39px] cursor-pointer"
                  onClick={onWilliamsButtonClick}
                >
                  Septic
                </a>
                <a
                  className="relative leading-[26px] text-[inherit] inline-block min-w-[39px] cursor-pointer"
                  onClick={onExcavationButtonClick}
                >
                  Excavation
                </a>
                <a
                  className="relative leading-[26px] text-[inherit] inline-block min-w-[39px] cursor-pointer"
                  onClick={onLoggingButtonClick}
                >
                  Logging
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-[7px] px-4 font-bold text-black cursor-pointer">
            <a className="relative leading-[26px] text-[inherit] inline-block min-w-[39px] cursor-pointer">
              Blog
            </a>
          </div>
          <button
            className="flex-1 cursor-pointer py-2 px-8 ml-10 bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-13xl flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
            onClick={onContactButtonClick}
          >
            <a className="relative text-base-8 leading-[25.6px] font-bold font-small-text text-white text-center">
              Contact Us Today
            </a>
          </button>
        </nav>
        <button
          className="hidden lg:block text-black bg-transparent"
          onClick={handleMenuClick}
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
      <div className="self-stretch bg-steelblue flex flex-col items-start justify-center py-2.5 px-[61px] box-border max-w-full text-29xl font-ledger mq1400:pl-[30px] mq1400:pr-[30px] mq1400:box-border">
        <div className="w-[1280px] flex flex-row items-center justify-between max-w-full gap-[20px] mq450:gap-0 mq450::flex-wrap">
          <div className="w-[543px] ml-10  flex flex-row items-center justify-start gap-[86px] max-w-full mq450:ml-0 mq825:gap-[24px] mq450:gap-[12px]">
            <img
              className="h-32 w-36 mq675:h-14 mq675:w-16 relative object-cover"
              loading="lazy"
              alt=""
              src="/tag-hd-logo@2x.png"
            />
            <h1 className="m-0 flex-1 relative text-[100px] tracking-[-0.1em] leading-[53px] font-normal font-inherit inline-block min-w-[213px] max-w-full lg:text-53xl mq1050:text-32xl mq825:text-10xl mq825:leading-[42px] mq450:text-xl mq450:leading-[32px]">
              WILLIAMS
            </h1>
          </div>
          <div className="w-auto mr-10 flex flex-col items-start justify-start text-32xl mq1050:text-19xl mq825:text-7xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-normal font-inherit  mq825:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
              {name1}
            </h1>
            <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-normal font-inherit mq825:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
              {name2}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
