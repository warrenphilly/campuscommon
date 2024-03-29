import PropertyRentCard from "./property-rent-card";

const RentPropertiesForm = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch text-[#e34848] relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>

        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <PropertyRentCard propBackgroundImage={`url("/assets/dtnl.jpg")`}/>
          <PropertyRentCard propBackgroundImage={`url("/assets/yyyy.jpg")`} />
          <PropertyRentCard propBackgroundImage={`url("/assets/yucv.jpg")`} />
          <PropertyRentCard propBackgroundImage={`url("/assets/yyuy.jpg")`} />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-[#e34848] rounded flex flex-row items-start justify-start hover:bg-[#934040]">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesForm;
