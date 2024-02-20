import { useMemo } from "react";

const PropertyRentCard = ({ propBackgroundImage }) => {
  const card12Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <a
      className="[text-decoration:none] flex-1 rounded-md h-[426px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px] text-left text-base text-gray-white font-body-regular-600 relative"
      style={card12Style}
    >
      {/* Black gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
          borderRadius: "inherit",
        }}
      ></div>

      <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px] z-10 relative">
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative w-6 h-6" alt="" src="/mappin.svg" />
          <div className="relative leading-[24px] font-medium">New Listing</div>
        </div>
        
      </div>
    </a>
  );
};

export default PropertyRentCard;
