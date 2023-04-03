import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  // const [ name, priceDetails, features] = items;

  return (
    <div className={`py-12 bg-background`} id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
 
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {items.map((feature) => (
              <div key={feature.name} className="">
                <dt>
                  <div
                    className={` flex items-center  justify-center h-96 w-72 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                   <div className=" portfolio-item ">
                  <div className=" ">
                    {" "}
                    <a href="mailto:kiranpravapvtltd@gmail.com?subject=Customer inquiry" title={title} data-lightbox-gallery="gallery1">
                    <img src={feature.name} className="img-responsive" alt={title} />{" "}

                      <div className='flex'>
                <h3 className=' font-bold m-1 text-lg' >{feature.price}</h3>
                

                      </div>
                      

                    </a>{" "}
                  </div>

                </div>
                

                  </div>
                  <a href="mailto:kiranpravapvtltd@gmail.com?subject=Customer inquiry">
                  <button className=" h-10 mt-2  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                Intrested
              </button>
              </a>
                  

                </dt>

              </div>
              

            ))}
          </dl>
        </div>
      </div>
    </div>
                    
  );

};

export default Pricing;
