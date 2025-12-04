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
        <div className={`relative bg-background pt-8`}>
          <div className="max-w-7xl mx-auto">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:min-h-[600px]">
              <div
                className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-0 lg:flex lg:items-center lg:h-full`}
              >
                <MainHero />
              </div>
              <div className="lg:flex lg:items-center lg:h-full">
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
