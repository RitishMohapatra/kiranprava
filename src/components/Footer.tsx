import React from "react";
import Image from "next/image";
import Link from "next/link";
import config from "../config/index.json";

const Footer = () => {
  const { company } = config;
  const { logo, name: companyName } = company;

  return (
    <footer className="bg-primary text-white pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="sr-only">{companyName}</span>
              <Image
                className="h-24 w-48 brightness-0 invert"
                src={logo}
                alt={companyName}
                width={192}
                height={96}
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing cost-effective coding and packing solutions. We supply
              Continuous Inkjet Printers, Thermal Inkjet Printers, and TTO
              Printers.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-secondary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-gray-400 hover:text-secondary transition-colors">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-secondary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=cij">
                  <a className="text-white hover:text-gray-300 transition-colors">
                    Inkjet Printers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=tij">
                  <a className="text-white hover:text-gray-300 transition-colors">
                    Thermal Inkjet (TIJ) Printer
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=inspection">
                  <a className="text-white hover:text-gray-300 transition-colors">
                    Workpiece Inspection Camera
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-secondary mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  PLOT NO. 1923/2606, Mangalabag, Cuttack - 753001
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-secondary mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+918984636379"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 89846 36379
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-secondary mr-3 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:kiranpravapvtltd@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  kiranpravapvtltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Made by{" "}
              <a
                href="https://ritishm.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Bitsparx
                <a
                  href="https://bitsparx.com"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
