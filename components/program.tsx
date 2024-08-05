import type { NextPage } from "next";
import Button2 from "./button2";

export type ProgramType = {
  className?: string;
  photo?: string;
  collegeAPProgram?: string;
  williamsSepticOffersExper?: string;
};

const Program: NextPage<ProgramType> = ({
  className = "",
  photo,
  collegeAPProgram,
  williamsSepticOffersExper,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start max-w-full text-left text-5xl text-dark-blue font-heading-heading-5 ${className}`}
    >
      <img
        className="self-stretch h-[300px] max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={photo}
      />
      <div className="self-stretch bg-light-blue-background flex flex-col items-end justify-start pt-6 px-6 pb-2 box-border gap-4 max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-bold font-[inherit] inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
              {collegeAPProgram}
            </h3>
          </div>
          <div className="self-stretch h-px relative bg-dark-blue-10" />
          <div className="self-stretch relative text-base leading-[24px] font-body-body-2 text-gray-400">
            {williamsSepticOffersExper}
          </div>
        </div>
        <Button2 />
      </div>
    </div>
  );
};

export default Program;
