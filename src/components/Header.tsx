import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";

import config from "../config/index.json";

const productCategories = [
  {
    id: "cij",
    title: "Inkjet Date Printer (CIJ)",
    href: "/products?category=cij",
  },
  {
    id: "tij",
    title: "Thermal Inkjet (TIJ) printer",
    href: "/products?category=tij",
  },
  {
    id: "inspection",
    title: "Workpiece inspection camera",
    href: "/products?category=inspection",
  },
];

const Menu = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName, logo } = company;
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Popover
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scroll ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-1">
          <div className="flex justify-start flex-shrink-0 -ml-4 sm:-ml-6">
            <Link href="/">
              <a href="#">
                <span className="sr-only">{companyName}</span>
                <Image
                  className="h-28 w-40 sm:h-32 sm:w-48 md:h-36 md:w-56"
                  src={logo}
                  alt={companyName}
                  width={224}
                  height={144}
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 flex-1 justify-center -ml-16"
          >
            {navigation.map((item) => {
              if (item.name === "Products") {
                return (
                  <Popover key={item.name} className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="text-base font-medium text-tertiary hover:text-primary cursor-pointer transition-colors flex items-center justify-center focus:outline-none">
                          {item.name}
                          <ChevronDownIcon
                            className={`ml-1 h-4 w-4 transition-transform ${
                              open ? "transform rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 mt-3 w-64 -translate-x-1/2 left-1/2 transform">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white overflow-hidden">
                              <div className="relative grid gap-1 p-2">
                                {productCategories.map((category) => (
                                  <Link key={category.id} href={category.href}>
                                    <a className="flex items-start rounded-lg p-3 hover:bg-gray-50 transition-colors">
                                      <div className="ml-3">
                                        <p className="text-sm font-medium text-primary">
                                          {category.title}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                );
              }
              return (
                <Link key={item.name} href={item.href}>
                  <a className="text-base font-medium text-tertiary hover:text-primary cursor-pointer transition-colors text-center">
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end flex-shrink-0">
            <Link href={callToAction.href}>
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-blue-700 transition-colors">
                {callToAction.text}
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-12 w-auto"
                    src={logo}
                    alt={companyName}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {navigation.map((item) => {
                    if (item.name === "Products") {
                      return (
                        <div key={item.name} className="space-y-2">
                          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {item.name}
                          </p>
                          {productCategories.map((category) => (
                            <Link key={category.id} href={category.href}>
                              <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer">
                                <span className="ml-3 text-base font-medium text-gray-900">
                                  {category.title}
                                </span>
                              </a>
                            </Link>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer">
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href={callToAction.href}>
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-blue-700">
                    {callToAction.text}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Menu;
