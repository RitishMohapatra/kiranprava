import React from "react";
import Image from "next/image";

import config from "../config/index.json";
import Divider from "./Divider";

const Product = () => {
  const { product } = config;
  const { items: productItems } = product;

  return (
    <section className={`bg-background py-16`} id="product">
      <div className={`container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="text-center mb-12">
          <h1
            className={`w-full my-8 text-5xl font-extrabold leading-tight text-primary font-heading sm:text-6xl md:text-7xl bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent`}
          >
            {product.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="mt-12 space-y-24">
          {productItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-wrap items-center ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`w-full sm:w-1/2 p-6`}>
                <div className="mb-6">
                  <h3
                    className={`text-4xl md:text-5xl text-primary font-bold leading-tight mb-3 font-heading relative inline-block`}
                  >
                    <span className="relative z-10">{item.title}</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-secondary/20 -z-0 transform -skew-x-12"></span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-blue-400 mt-2 rounded-full"></div>
                </div>
                <p className={`text-tertiary text-lg leading-relaxed`}>
                  {item.description}
                </p>
              </div>
              <div className={`w-full sm:w-1/2 p-6`}>
                <Image
                  className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
