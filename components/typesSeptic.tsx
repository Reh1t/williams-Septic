import type { NextPage } from "next";

export type SectionType = {
  className?: string;
};

const TypesSection: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-end flex-wrap content-start px-10 box-border max-w-full text-center text-45xl text-dark-blue font-dm-sans">
      <div className="flex-1 flex flex-row items-start justify-center flex-wrap content-start max-w-full">
        <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[37px] max-w-full mq750:gap-[18px]">
            <b
              className="self-stretch relative leading-[60px] mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]"
            >
              Types of systems
            </b>
            <div className="w-[856px] flex flex-col items-start justify-start max-w-full text-xl text-gray font-inter">
              <div className="self-stretch relative leading-[26px]">
                There are five classes of systems identified by the Ontario
                Building Code to deal with waste, but most aren’t applicable for
                everyday family living. Classes 1, 2, 3 and 5 have very specific
                and limited uses. Most rural homes, cottages, and businesses use
                a Class 4 septic system that disperses the effluent into soil.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[52px] max-w-full lg:flex-wrap mq750:gap-[26px]">
            <div className="flex-1 flex flex-row items-center justify-start min-w-[425px] max-w-full mq750:min-w-full">
              <img
                className="w-fit flex-1 relative max-w-full overflow-hidden object-cover  "
                loading="lazy"
                alt=""
                src="/types1.png"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-start min-w-[425px] max-w-full mq750:min-w-full">
              <img
                className="w-fit flex-1 relative max-w-full overflow-hidden object-coverr"
                loading="lazy"
                alt=""
                src="/types2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesSection;
