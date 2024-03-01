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
      <div className="relative bg-[#fbfbfb] w-full flex flex-col items-center justify-start">
        <Header showHamburgerMenuIcon={true} />
        <Hero />

        <FeatureContainer />
        <AreaContainer />
        <RentPropertiesForm />
        {/* <RentPropertiesContainer /> */}
        
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LandingPage;
