import AreaCard from "./area-card";

const AreaContainer = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px] text-center text-21xl text-[#e34848] font-body-regular-600">
      <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Find Your Home
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <AreaCard
              cityName="Downtown"
              propBackgroundImage={`url(/assets/dtto.jpg)`}
              propPadding="unset"
              propBoxSizing="unset"
            />
            <AreaCard
              cityName="The Village at York"
              propBackgroundImage={`url(/assets/village.jpg)`}
              propPadding="unset"
              propBoxSizing="unset"
            />
            <AreaCard
              cityName="The Annex"
              propBackgroundImage={`url(/assets/annex.jpg)`}
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <AreaCard
              cityName="Midtown"
              propBackgroundImage={`url("/assets/mid1.jpg")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
            <AreaCard
              cityName="Vaughan"
              propBackgroundImage={`url("/assets/vue.jpg")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaContainer;
