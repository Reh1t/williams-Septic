import type { NextPage } from "next";
import IconBox from "./icon-box";
import { useCallback, useEffect } from "react";
import router from "next/router";

export type ContactType = {
  className?: string;
};

const PdfDownload: NextPage<ContactType> = ({ className = "" }) => {
  const onDownloadButtonClick = useCallback(() => {
    const pdfPath = "/Septic-smart-understanding-home-wastewater-system.pdf"; // Adjust the path based on your project structure

    // Create an anchor element and simulate a click to trigger the download
    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "Septic_Book.pdf"); // The name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section
      className={`self-stretch bg-main-background flex flex-col items-center justify-center max-w-full text-left text-37xl text-variant-background font-body-3 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-10 px-5 box-border max-w-full">
        <div
          className="flex flex-row flex-wrap items-center justify-start py-0 pl-0 pr-[390px] box-border gap-x-10 gap-y-9 max-w-full lg:pr-[195px] lg:box-border gap-[18px] mq750:pr-[97px] mq750:box-border mq450:pr-5 mq450:box-border"
        >
          <div className="flex-1 relative border-lavender border-t-[1px] border-solid box-border max-w-full" />
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit]">
            Get Full Septic Book Here
          </h1>
        </div>
        <button
          className="cursor-pointer py-6 px-14  bg-green shadow-[0px_8px_16px_rgba(55,_99,_244,_0.15)] rounded-xl flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-mediumslateblue hover:bg-deepskyblue hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue"
          onClick={onDownloadButtonClick}
        >
          <a className="relative text-xl leading-[25.6px] font-bold font-small-text text-white text-center">
            Download
          </a>
        </button>
      </div>
    </section>
  );
};

export default PdfDownload;
