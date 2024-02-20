import { useMemo } from "react";

const InfoCard = ({ listingId, actionText, propWidth, descText }) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="rounded bg-[#ffffff] shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start w-[340px] h-[340] text-center text-5xl text-gray-700 font-body-regular-600"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <span className="w-full items-center">
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0"
            alt=""
            src={listingId}
          />
        </span>

        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[32px]  h-[40px] font-semibold">
            {actionText}
          </div>
          <div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
            {descText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
