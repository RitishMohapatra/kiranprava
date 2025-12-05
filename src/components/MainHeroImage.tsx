import React from "react";
import Image from "next/image";

import config from "../config/index.json";

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-8 lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center lg:pt-8">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          className="h-[280px] w-full object-contain sm:h-[380px] md:h-[480px] lg:h-[600px] xl:h-[700px] lg:max-h-[800px] lg:object-contain"
          src={mainHero.img}
          alt="happy team image"
          width={1200}
          height={1200}
          priority
        />
      </div>
    </div>
  );
};

export default MainHeroImage;
