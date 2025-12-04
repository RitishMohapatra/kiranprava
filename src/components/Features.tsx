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
          <dl className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {featuresList.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary/20 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-300 rounded-2xl"></div>

                <dt className="relative z-10">
                  <div
                    className={`flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-secondary to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}
                  >
                    <Image
                      className={`inline-block h-7 w-7 brightness-0 invert`}
                      src={feature.icon}
                      alt={feature.name}
                      width={28}
                      height={28}
                    />
                  </div>
                  <p className="text-xl leading-6 font-bold text-primary font-heading mb-3 group-hover:text-secondary transition-colors">
                    {feature.name}
                  </p>
                </dt>
                <dd className="relative z-10 mt-4 text-sm text-tertiary leading-relaxed">
                  <div className="space-y-1">
                    {feature.description.split(" | ").map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-secondary mr-2 mt-1.5">•</span>
                        <span className="flex-1">{item}</span>
                      </div>
                    ))}
                  </div>
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
