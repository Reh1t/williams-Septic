import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FormFieldType = {
  className?: string;
  yourName?: string;
  enterYourNamePlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FormField: NextPage<FormFieldType> = ({
  className = "",
  yourName,
  enterYourNamePlaceholder,
  propWidth,
}) => {
  const enterYourNameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-3.5 text-left text-xl text-primary font-body-3 ${className}`}
    >
      <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
        {yourName}
      </div>
      <div className="self-stretch rounded-8xs bg-white border-border-1 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-3 px-[30px]">
        <input
          className="w-[105px] [border:none] [outline:none] font-medium font-body-3 text-sm bg-[transparent] h-[22px] relative tracking-[-0.03em] leading-[160%] text-gray-1 text-left inline-block p-0"
          placeholder={enterYourNamePlaceholder}
          type="text"
          style={enterYourNameStyle}
        />
      </div>
    </div>
  );
};

export default FormField;
