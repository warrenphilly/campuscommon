import Propertycard from "./propertycard";

const RentPropertiesContainer = () => {
  return (
    <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <Propertycard
            propertyImage="/unsplashrlwe8f8anoc7@2x.png"
            car="/car5.svg"
            bathtub="/bathtub5.svg"
            arrowsOut="/arrowsout2.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork6.svg"
            heart="/heart2.svg"
            plus="/plus7.svg"
            propWidth="400px"
            propMinWidth="355px"
            propMaxWidth="400px"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
          <Propertycard
            propertyImage="/unsplashrlwe8f8anoc8@2x.png"
            car="/car5.svg"
            bathtub="/bathtub5.svg"
            arrowsOut="/arrowsout2.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork6.svg"
            heart="/heart2.svg"
            plus="/plus8.svg"
            propWidth="400px"
            propMinWidth="355px"
            propMaxWidth="400px"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
          <Propertycard
            propertyImage="/unsplashrlwe8f8anoc9@2x.png"
            car="/car6.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout3.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork7.svg"
            heart="/heart2.svg"
            plus="/plus3.svg"
            propWidth="400px"
            propMinWidth="355px"
            propMaxWidth="400px"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
          <Propertycard
            propertyImage="/unsplashrlwe8f8anoc10@2x.png"
            car="/car6.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout3.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork7.svg"
            heart="/heart2.svg"
            plus="/plus3.svg"
            propWidth="400px"
            propMinWidth="355px"
            propMaxWidth="400px"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-goldenrod rounded flex flex-row items-start justify-start hover:bg-darkgoldenrod">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </form>
  );
};

export default RentPropertiesContainer;
