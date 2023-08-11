import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real estate</title>
        <meta name="description" content="Time to find your dream house" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header showHamburgerMenuIcon={false} />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          imageDimensions="/houseline2.svg"
          imageDimensionsText="/social-media-logo5.svg"
          imageDimensionsCode="/social-media-logo6.svg"
          imageDimensionsText2="/social-media-logo7.svg"
          imageDimensionsCodeText="/social-media-logo8.svg"
          imageDimensionsTextCode="/social-media-logo9.svg"
        />
      </div>
    </>
  );
};

export default LandingPage;
