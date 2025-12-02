import React from "react";
import Image from "next/image";

import config from "../config/index.json";

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-24 bg-surface`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2
            className={`text-base text-secondary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl font-heading">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-tertiary lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
              >
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white`}
                  >
                    <Image
                      className={`inline-block h-6 w-6 rounded-full brightness-0 invert`}
                      src={feature.icon}
                      alt={feature.name}
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-primary font-heading">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-4 ml-16 text-base text-tertiary">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
