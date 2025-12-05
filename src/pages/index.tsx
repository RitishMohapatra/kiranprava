import React from "react";
import Layout from "../components/Layout";
import Canvas from "../components/Canvas";
import Features from "../components/Features";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import Analytics from "../components/Analytics";

const App = () => {
  return (
    <Layout>
      <div className={`bg-background grid gap-y-0 overflow-hidden`}>
        <div className={`relative bg-background pt-4 sm:pt-6 md:pt-8 lg:pt-8`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:min-h-[500px] xl:min-h-[600px]">
              <div
                className={`relative z-10 pb-6 bg-background sm:pb-8 md:pb-12 lg:pb-0 lg:flex lg:items-center lg:h-full`}
              >
                <MainHero />
              </div>
              <div className="lg:flex lg:items-center lg:h-full lg:order-2">
                <MainHeroImage />
              </div>
            </div>
          </div>
        </div>
        <Canvas />
        <Features />
        <Analytics />
      </div>
    </Layout>
  );
};

export default App;
