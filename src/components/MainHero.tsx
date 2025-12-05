import React from "react";
import Link from "next/link";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 md:px-8 lg:mt-8 lg:px-8">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl tracking-tight font-extrabold text-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-heading">
          <span className="block xl:inline">{mainHero.title}</span>{" "}
          <span className={`block text-secondary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-sm text-tertiary sm:mt-4 sm:text-base sm:max-w-xl md:mt-5 md:text-lg lg:text-lg lg:max-w-2xl xl:text-xl mx-auto lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
          <div className="rounded-md shadow">
            <Link href={mainHero.primaryAction.href}>
              <a
                className={`w-full flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-blue-700 sm:px-8 sm:py-3 sm:text-base md:py-4 md:text-lg md:px-10 transition-colors`}
              >
                {mainHero.primaryAction.text}
              </a>
            </Link>
          </div>
          <div>
            <Link href={mainHero.secondaryAction.href}>
              <a
                className={`w-full flex items-center justify-center px-6 py-2.5 border-2 border-secondary text-sm font-medium rounded-md text-secondary bg-white hover:bg-gray-50 sm:px-8 sm:py-3 sm:text-base md:py-4 md:text-lg md:px-10 transition-colors`}
              >
                {mainHero.secondaryAction.text}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
