import type { NextPage } from "next";

export type Section1Type = {
  className?: string;
};

const Section: NextPage<Section1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-end justify-start py-0 px-10 box-border max-w-full text-left text-base text-white font-body-body-2 ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-5 max-w-full mq450:flex-wrap">
        <img
          className="h-[50.7px] w-[50.7px] relative object-cover mt-10"
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <b className="h-0 relative leading-[32px] text-black inline-block mq450:text-base mq450:leading-[26px]">
          by Williams Solutions.Pro
        </b>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start max-w-full text-xl text-gray-300 font-work-sans">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[38px] box-border gap-[108px] max-w-full">
          <div className="w-[525px] flex flex-row items-center justify-start max-w-full">
            <img
              className="h-[436px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/rectangle@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start min-w-[335px] max-w-full">
            <div className="h-auto flex-1 relative tracking-[-0.02em] inline-block max-w-full mq450:text-base">
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
    </section>
  );
};

export default Section;
