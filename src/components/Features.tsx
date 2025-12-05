import React from "react";

import config from "../config/index.json";

const getFeatureIcon = (featureName: string) => {
  const iconClass = "h-7 w-7";

  switch (featureName) {
    case "Printing Solution":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-2h8zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
          <circle cx="18" cy="11.5" r="1" />
        </svg>
      );
    case "Machine Solution":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case "More Product":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
        </svg>
      );
    case "Other Product":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7.01v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z" />
        </svg>
      );
    case "Service & Support":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm-1 17.93c-3.94-.26-7-3.4-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      );
    case "Consumables & Supplies":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H5v-4h9v4zm0-5H5V9h9v3zm5 5h-4V9h4v8z" />
          <rect x="7" y="7" width="2" height="2" />
          <rect x="7" y="11" width="2" height="2" />
          <rect x="7" y="15" width="2" height="2" />
        </svg>
      );
    default:
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
  }
};

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
            {featuresList.map((feature) => (
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
                    {getFeatureIcon(feature.name)}
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
