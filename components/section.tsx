import type { NextPage } from "next";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-start justify-end py-5 px-10 box-border min-h-[650px] max-w-full text-left text-xl text-black font-body-body-2 ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-5 max-w-full mq450:flex-wrap">
        <img
          className="h-[50.7px] w-[50.7px] relative object-cover mt-10"
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <b className="h-0 relative leading-[32px] inline-block mq450:text-base mq450:leading-[26px]">
          by Williams Plumbing Solutions
        </b>
      </div>
      <div className="w-[1360px] flex flex-row flex-wrap items-start justify-center max-w-full text-45xl text-dark-blue font-body-3">
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-x-[108px] gap-y-[106px] max-w-full gap-[53px]">
          <div className="w-[525px] flex flex-row items-center justify-start max-w-full">
            <img
              className="h-[559px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/rectangle@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[335px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[60px] font-bold font-[inherit] mq450:text-19xl mq450:leading-[36px] mq1050:text-32xl mq1050:leading-[48px]">
              <p className="m-0">{`Welcome to `}</p>
              <p className="m-0">WILLIAMS SEPTIC</p>
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start text-xl text-gray-300 font-work-sans">
              <div className="self-stretch relative tracking-[-0.02em] mq450:text-base">
                Williams Septic, a family-owned business in Northern Ontario,
                provides expert septic system solutions, including installation,
                maintenance, and emergency repairs. Our experienced team uses
                state-of-the-art equipment to ensure efficient and reliable
                operation, making us a trusted name known for quality and
                customer satisfaction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
