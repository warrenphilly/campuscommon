import { useMemo } from "react";

const Propertycard = ({
  propertyImage,
  car,
  bathtub,
  arrowsOut,
  ellipse1,
  shareNetwork,
  heart,
  plus,
  propWidth,
  propMinWidth,
  propMaxWidth,
  propBoxSizing,
  propDisplay,
  propBoxSizing1,
  propDisplay1,
  propBoxSizing2,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propDisplay5,
}) => {
  const card1Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      maxWidth: propMaxWidth,
    };
  }, [propWidth, propMinWidth, propMaxWidth]);

  const propertyNameStyle = useMemo(() => {
    return {
      boxSizing: propBoxSizing,
    };
  }, [propBoxSizing]);

  const aLLIUMPLACEORLANDOStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const priceStyle = useMemo(() => {
    return {
      boxSizing: propBoxSizing1,
    };
  }, [propBoxSizing1]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const moreDetailsStyle = useMemo(() => {
    return {
      boxSizing: propBoxSizing2,
    };
  }, [propBoxSizing2]);

  const div1Style = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const div2Style = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const ftStyle = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const jennyWilsonStyle = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]);

  return (
    <div
      className="rounded-3xs bg-gray-white box-border w-[350px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] text-left text-[14.51px] text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      style={card1Style}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={propertyImage}
      />
      <div
        className="self-stretch flex flex-row p-2.5 items-start justify-start"
        style={propertyNameStyle}
      >
        <div
          className="flex-1 relative leading-[20.32px] font-medium"
          style={aLLIUMPLACEORLANDOStyle}
        >
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div
        className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-goldenrod"
        style={priceStyle}
      >
        <div
          className="relative leading-[18.98px] font-semibold"
          style={divStyle}
        >
          $ 590,693
        </div>
      </div>
      <div
        className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500"
        style={moreDetailsStyle}
      >
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img className="relative w-[17.42px] h-[17.42px]" alt="" src={car} />
          <div
            className="relative leading-[16.27px] font-medium"
            style={div1Style}
          >
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={bathtub}
          />
          <div
            className="relative leading-[16.27px] font-medium"
            style={div2Style}
          >
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={arrowsOut}
          />
          <div
            className="relative leading-[16.27px] font-medium"
            style={ftStyle}
          >
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
            alt=""
            src={ellipse1}
          />
          <div
            className="relative leading-[17.42px] font-medium"
            style={jennyWilsonStyle}
          >
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <div className="rounded-31xl bg-oldlace flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={shareNetwork}
            />
          </div>
          <div className="rounded-31xl bg-oldlace flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={heart}
            />
          </div>
          <div className="rounded-31xl bg-oldlace flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={plus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propertycard;
