import React from "react";

import config from "../config/index.json";

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="mt-6 sm:mt-10 lg:mt-0 lg:-mt-8 lg:w-full lg:h-full lg:flex lg:items-start lg:justify-center lg:pt-0">
      <img
        className="h-[450px] w-full object-cover sm:h-[580px] md:h-[770px] lg:w-full lg:max-h-[1200px] lg:object-contain"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
