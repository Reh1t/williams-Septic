import type { NextPage } from "next";

export type Section1Type = {
  className?: string;
};

const Section1: NextPage<Section1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-end justify-start py-5 px-10 box-border max-w-full text-left text-base text-white font-body-body-2 ${className}`}
    >
      <div
        className="w-[500px] bg-dark-blue flex flex-col items-start justify-start py-4 pl-16 pr-5 box-border gap-2 max-w-full mq450:pl-5 mq450:box-border"
        data-scroll-to="about"
      >
        <a className="[text-decoration:none] relative tracking-[0.3em] leading-[24px] text-[inherit] inline-block min-w-[75px]">
          ABOUT
        </a>
        <h1 className="m-0 relative text-25xl leading-[60px] font-normal font-body-3 inline-block max-w-full mq450:text-7xl mq450:leading-[36px] mq1050:text-16xl mq1050:leading-[48px]">
          WILLIAMS SEPTIC
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-center max-w-full text-xl text-gray-300 font-work-sans">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[38px] box-border gap-28 max-w-full mb-8">
          <div className="w-[525px] flex flex-row items-center justify-start max-w-full">
            <img
              className="h-[436px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/speticc.jpg"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start min-w-[335px] max-w-full">
            <div className="h-auto flex-1 relative tracking-[-0.02em] inline-block max-w-full mq450:text-base">
              Choose Williams Septic for expert, reliable septic services in
              Northern Ontario. Our family-owned business delivers top-quality,
              maintenance, and emergency repairs. With a focus on preventative
              care, we help extend your septic system’s lifespan and efficiency.
              Count on our swift, professional, and customer-focused service to
              keep your home or business running smoothly and reliably.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
