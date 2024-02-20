import { useMemo } from "react";
import Link from "next/link";

const AreaCard = ({
  cityName,
  propBackgroundImage,
  propPadding,
  propBoxSizing,
}) => {
  const card11Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propBackgroundImage, propPadding, propBoxSizing]);

  return (
    <Link
      className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-white hover:text-[#e15b5b] font-body-regular-600 md:flex-[unset] md:self-stretch"
      href="/"
      style={card11Style}
    >
      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#7b4a4a] bg-opacity-50 z-10"></div>

      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-20">
        <div className="relative leading-[32px] font-semibold">{cityName}</div>
        <div className="relative text-base leading-[24px] text-center">
          25 listings
        </div>
      </div>
    </Link>
  );
};

export default AreaCard;
