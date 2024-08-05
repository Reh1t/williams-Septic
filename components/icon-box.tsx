import type { NextPage } from "next";

export type IconBoxType = {
  className?: string;
  phone?: string;
  phoneNumber?: string;
  infoContent?: string;
};

const IconBox: NextPage<IconBoxType> = ({
  className = "",
  phone,
  phoneNumber,
  infoContent,
}) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-row items-center justify-start gap-5 text-left text-xl text-primary font-body-3 mq450:flex-wrap ${className}`}
    >
      <div className="rounded-8xs bg-variant-background overflow-hidden flex flex-row items-center justify-center p-6">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={phone}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-1.5 min-w-[159px]">
        <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
          {phoneNumber}
        </div>
        <div className="self-stretch relative text-base tracking-[-0.03em] leading-[26px] font-medium text-text">
          {infoContent}
        </div>
      </div>
    </div>
  );
};

export default IconBox;
