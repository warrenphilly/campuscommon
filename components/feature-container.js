import InfoCard from "./info-card";

const FeatureContainer = () => {
  return (
    <div className="self-stretch  flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl font-body-regular-600 text-[#e34848]">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Get Started with us Today
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Join more than 1,000 students find homes with us each year
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <InfoCard
            listingId="/assets/feature1.png"
            actionText="Sign up with us!"
            descText="Create an account with us and fill out our form."
            propWidth="312px"
          />
          <InfoCard
            listingId="/assets/feature2.png"
            actionText="We find you a home"
            descText=" We find you a home that matches your custom preferences!"
            propWidth="312px"
          />
          <InfoCard
            listingId="/assets/feature3.png"
            actionText="Finalize your lease"
            descText=" Finalize your lease with your landlord and move into your new home"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
