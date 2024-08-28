import type { NextPage } from "next";
import Program from "./program";

export type WilliamsType = {
  className?: string;
};

const Williams: NextPage<WilliamsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-tan overflow-hidden flex flex-col items-start justify-start py-10 px-0 box-border gap-10 max-w-full text-center text-25xl text-gray-100 font-body-3 mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:pt-[26px] mq1050:pb-[26px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5" data-scroll-to="service">
        <h1 className="m-0 relative text-inherit leading-[60px] font-bold font-[inherit] mq450:text-7xl mq450:leading-[36px] mq1050:text-16xl mq1050:leading-[48px]">
          WILLIAMS SERVICE OPTIONS
        </h1>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start py-0 px-[90px] box-border max-w-full grid-cols-[repeat(3,_minmax(300px,_1fr))] text-left text-5xl text-dark-blue font-heading-heading-5 lg:justify-center lg:grid-cols-[repeat(2,_minmax(300px,_520px))] gap-[15px] mq750:pl-[45px] mq750:pr-[45px] mq750:box-border mq750:grid-cols-[minmax(300px,_1fr)] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <Program
          photo="/photo-1@2x.png"
          collegeAPProgram="Water Treatment"
          williamsSepticOffersExper="At Williams Water Treatment, we provide comprehensive water treatment solutions to ensure your water is clean, safe, and healthy. Our services include water softening, advanced filtration, and UV water purification systems. We tailor our solutions to meet your specific needs, delivering reliable and efficient results for both residential and commercial properties."
        />
        <Program
          photo="/photo-11@2x.png"
          collegeAPProgram="Septic Services"
          williamsSepticOffersExper="Williams Septic offers expert septic system solutions to keep your system running smoothly and efficiently. Our services include septic tank installation, routine maintenance, and emergency repairs. We use state-of-the-art equipment and techniques to ensure your septic system remains reliable and trouble-free, providing peace of mind for both residential and commercial customers."
        />
        <Program
          photo="/photo-12@2x.png"
          collegeAPProgram="Plumbing Solutions"
          williamsSepticOffersExper="Williams Plumbing Solutions provides top-notch plumbing solutions to meet all your needs, whether residential, commercial, or industrial. Our comprehensive services include plumbing installations, repairs, and maintenance, as well as heating system installations and servicing. We are equipped to handle everything from minor leaks to large-scale projects, ensuring efficient and reliable solutions tailored to your specific requirements."
        />
      </div>
    </section>
  );
};

export default Williams;
