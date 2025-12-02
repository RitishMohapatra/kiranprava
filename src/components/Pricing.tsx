import React from "react";
import Image from "next/image";

import config from "../config/index.json";

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;

  return (
    <div className={`py-24 bg-surface`} id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2
            className={`text-base text-secondary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl font-heading">
            Our Product Range
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border group"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative overflow-hidden">
                  <Image
                    src={feature.name}
                    alt={feature.price}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={256}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4 font-heading min-h-[3.5rem]">
                    {feature.price}
                  </h3>

                  <a
                    href="mailto:kiranpravapvtltd@gmail.com?subject=Customer inquiry"
                    className="block w-full text-center px-4 py-2 border border-secondary text-secondary font-medium rounded-md hover:bg-secondary hover:text-white transition-colors duration-300"
                  >
                    Interested
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
