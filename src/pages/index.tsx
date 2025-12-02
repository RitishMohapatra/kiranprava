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
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <Canvas />
        <Features />
        <Analytics />
      </div>
    </Layout>
  );
};

export default App;
