import InfoCard from "./info-card";

const FeatureContainer = () => {
  return (
    <div className="self-stretch bg-lemonchiffon flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-dimgray font-body-regular-600">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            What are you Looking for?
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <InfoCard listingId="/icon.svg" actionText="Sell your home" />
          <InfoCard
            listingId="/icon1.svg"
            actionText="Rent your home"
            propWidth="312px"
          />
          <InfoCard
            listingId="/icon2.svg"
            actionText="Buy a home"
            propWidth="unset"
          />
          <InfoCard
            listingId="/icon3.svg"
            actionText="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
