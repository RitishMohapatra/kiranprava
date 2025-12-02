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
        <h1
          className={`w-full my-2 text-4xl font-extrabold leading-tight text-center text-primary font-heading sm:text-5xl`}
        >
          {product.title}
        </h1>
        <Divider />

        <div className="mt-12 space-y-24">
          {productItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-wrap items-center ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`w-full sm:w-1/2 p-6`}>
                <h3
                  className={`text-3xl text-primary font-bold leading-none mb-4 font-heading`}
                >
                  {item.title}
                </h3>
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
