import type { NextPage } from "next";

export type GalleryContainerType = {
  className?: string;
};

const GalleryContainer: NextPage<GalleryContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[1455px] flex flex-col items-start justify-start pt-0 px-0 pb-[988.9px] box-border gap-[28.6px] max-w-full lg:pb-[418px] lg:box-border mq750:pb-[272px] mq750:box-border mq1050:h-auto ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[960.8px] w-[469.5px] absolute !m-[0] right-[363.6px] bottom-[-494.7px] object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-3@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-5 mq1050:flex-wrap">
          <img
            className="w-[585.9px] relative max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/74208678461--2c20dac31cd24732bb98f371b45a5ddc-1@2x.png"
          />
          <img
            className="w-[348.8px] relative max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[28.4px] shrink-0 max-w-full">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq1050:flex-wrap">
          <img
            className="self-stretch w-[571.6px] relative max-h-full object-cover min-h-[466px] max-w-full"
            loading="lazy"
            alt=""
            src="/rectangle-5@2x.png"
          />
          <img
            className="self-stretch w-[348.8px] relative max-h-full object-cover min-h-[466px] max-w-full"
            loading="lazy"
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-0.5 box-border gap-[14.9px] max-w-full">
          <img
            className="self-stretch w-[348.8px] relative max-h-full object-cover min-h-[466px] max-w-full"
            loading="lazy"
            alt=""
            src="/rectangle-7@2x.png"
          />
          <img
            className="self-stretch w-[348.8px] relative max-h-full object-cover min-h-[466px] max-w-full"
            loading="lazy"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[461px] min-h-[466px] mq750:min-w-full"
            loading="lazy"
            alt=""
            src="/rectangle-10@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryContainer;
