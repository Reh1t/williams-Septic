import type { NextPage } from "next";

export type Button2Type = {
  className?: string;
};

const Button2: NextPage<Button2Type> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-5 px-[30px] bg-ghostwhite rounded-81xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro ${className}`}
    >
      <div className="relative text-mid tracking-[-0.03em] leading-[100%] font-medium font-body-3 text-gray-200 text-left inline-block min-w-[86px]">
        Learn More
      </div>
    </button>
  );
};

export default Button2;
