import type { NextPage } from "next";

export type Button1Type = {
  className?: string;
};

const Button1: NextPage<Button1Type> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-5 px-[30px] bg-primary rounded-80xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkslategray ${className}`}
    >
      <div className="relative text-mid tracking-[-0.03em] leading-[100%] font-medium font-body-3 text-white text-left inline-block min-w-[111px]">
        Send Message
      </div>
    </button>
  );
};

export default Button1;
