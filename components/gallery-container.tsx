import type { NextPage } from "next";

export type GalleryContainerType = {
  className?: string;
};

const GalleryContainer: NextPage<GalleryContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 box-border max-w-full lg:box-border mq750:box-border mq1050:h-auto ${className}`}
    >
      <div className="flex flex-row flex-wrap gap-0 w-full" data-scroll-to="galleryContainer">
        <div className="flex flex-col w-1/3">
          <img
            className="w-full h-full object-cover"
            alt=""
            src="/rectangle@2x.png"
          />
          <img
            className="w-full h-full object-cover"
            alt=""
            src="/rectangle-5@2x.png"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <img
            className="w-full h-full object-cover"
            alt=""
            src="/rectangle-3@2x.png"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <img
            className="w-full h-full object-cover"
            alt=""
            src="/rectangle-4@2x.png"
          />
          <img
            className="w-full h-full object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex felx-col items-start justify-start">
          <img
            className="self-stretch relative max-w-full overflow-hidden"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden"
            alt=""
            src="/rectangle-10@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryContainer;



