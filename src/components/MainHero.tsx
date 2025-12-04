import React from "react";
import Link from "next/link";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-24 lg:mt-8 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl font-heading">
          <span className="block xl:inline">{mainHero.title}</span>{" "}
          <span className={`block text-secondary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-tertiary sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl mx-auto">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
          <div className="rounded-md shadow">
            <Link href={mainHero.primaryAction.href}>
              <a
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors`}
              >
                {mainHero.primaryAction.text}
              </a>
            </Link>
          </div>
          <div>
            <Link href={mainHero.secondaryAction.href}>
              <a
                className={`w-full flex items-center justify-center px-8 py-3 border-2 border-secondary text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors`}
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
