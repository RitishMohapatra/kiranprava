import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Image from "next/image";

const ProductsPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<Record<string, number>>(
    {}
  );
  const [isZoomOpen, setIsZoomOpen] = useState<{
    productId: string;
    isOpen: boolean;
  }>({ productId: "", isOpen: false });

  // Handle URL query parameter for category or default to first category
  useEffect(() => {
    if (router.query.category && typeof router.query.category === "string") {
      setSelectedCategory(router.query.category);
    } else if (!selectedCategory) {
      // Default to first category if no category is selected
      setSelectedCategory("cij");
    }
  }, [router.query.category, selectedCategory]);

  const a400SubProducts = [
    {
      id: "ink2",
      name: "INK2",
      image: "/images/ink2.png",
    },
    {
      id: "ink3",
      name: "INK3",
      image: "/images/ink3.png",
    },
    {
      id: "ink4",
      name: "INK4",
      image: "/images/ink4.png",
    },
    {
      id: "pro1",
      name: "PRO1",
      image: "/images/pro1.png",
    },
  ];

  const f500SubProducts = [
    {
      id: "ink5",
      name: "INK5",
      image: "/images/ink5.png",
    },
    {
      id: "ink6",
      name: "INK6",
      image: "/images/ink6.png",
    },
    {
      id: "ink7",
      name: "INK7",
      image: "/images/ink7.png",
    },
  ];

  const cijProducts = [
    {
      id: "a400",
      name: "FASTJET A400 SERIES",
      subtitle: "",
      color: "text-red-600",
      image: "/assets/images/happyTeam.jpg", // Update with actual A400 image path
      companyInfo: {
        brand: "FASTJET",
        description:
          "Germany Brand and a German-China joint venture CIJ manufacturer shared by Germany 100 years group Cyklop International. We all adopt Germany ways of production management and technology all comes from Germany and assembled in Shanghai.",
        leadership: "We are a leading CIJ company in some Asian countries.",
      },
      features: [
        "Modular design",
        "Better printing Quality",
        "Various ports",
        "Upgraded control system",
        "More stable printerhead",
      ],
      subProducts: a400SubProducts,
    },
    {
      id: "f500",
      name: "FASTJET F500",
      subtitle: "Small Character Ink Jet Printer",
      color: "text-red-600",
      companyInfo: {
        brand: "FASTJET",
        description:
          "Germany Brand and a German-China joint venture CIJ manufacturer shared by Germany 100 years group Cyklop International. We all adopt Germany ways of production management and technology all comes from Germany and assembled in Shanghai.",
        leadership: "We are a leading CIJ company in some Asian countries.",
      },
      features: [
        "Modular design",
        "Better printing Quality",
        "Various ports",
        "Upgraded control system",
        "More stable printerhead",
      ],
      subProducts: f500SubProducts,
    },
  ];

  const tijSubProducts = [
    {
      id: "th1",
      name: "TH1",
      image: "/images/th1.png",
    },
    {
      id: "th2",
      name: "TH2",
      image: "/images/th2.png",
    },
  ];

  const tijProducts = [
    {
      id: "f3500",
      name: "F3500 Series",
      subtitle: "Thermal Inkjet Printer",
      color: "text-primary",
      companyInfo: {
        brand: "Thermal Inkjet (TIJ)",
        description:
          "TIJ printers use heat to eject ink droplets from a cartridge onto a surface, making them a non-contact printing technology for thermal inkjet printer.",
        leadership: "",
      },
      features: [
        "Non-contact printing technology",
        "High-quality thermal inkjet printing",
        "Precise ink droplet control",
        "Reliable cartridge-based system",
        "Versatile surface compatibility",
      ],
      subProducts: tijSubProducts,
    },
  ];

  const inspectionSubProducts = [
    {
      id: "cam1",
      name: "CAM1",
      image: "/images/cam1.png",
    },
    {
      id: "cam2",
      name: "CAM2",
      image: "/images/cam2.png",
    },
  ];

  const inspectionProducts = [
    {
      id: "vision-camera",
      name: "Better Code Vision Camera",
      subtitle: "AI Smart Camera System",
      color: "text-primary",
      companyInfo: {
        brand: "Better Code Co., Ltd.",
        description:
          "Industrial inspection systems are widely used in food and beverage, cosmetics, pharmaceuticals, building materials and chemicals, metal processing, electronics manufacturing, packaging, automotive manufacturing and other industries, and are still controlled by PC solutions. However, intelligent camera solutions, X86 open platform for factory automation, this solution is easy to use and easy to maintain equipment, and is becoming an increasingly mainstream choice. Better Code Co., Ltd.'s AI smart camera is a highly integrated small-sized machine vision system that integrates image acquisition, storage, processing and communication functions, thus creating a highly functional, modular, highly reliable and easy-to-use machine vision solution. At the same time, due to the continuous iterative updates of DSP, FPGA and mass storage technologies, the artificial intelligence of this AI smart camera is increasing to meet the needs of increasingly complex machine vision applications.",
        leadership: "",
      },
      features: [
        "Resolution range 0.4MP~25MP, support long-range detection and large FOV",
        "Built-in large-capacity storage, support loop recording",
        "Including traditional vision algorithms, including AI deep learning, covering all types of detection",
        "Support various industrial communication protocols",
        "Protection level IP65 or above, adapt to industrial application environments",
      ],
      subProducts: inspectionSubProducts,
    },
  ];

  const renderProductDetails = (
    product:
      | typeof cijProducts[0]
      | typeof tijProducts[0]
      | typeof inspectionProducts[0],
    showBackButton: boolean = true
  ) => {
    const productId = product.id || "";
    const currentIndex = carouselIndex[productId] || 0;

    return (
      <div className="mt-12">
        {showBackButton && (
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary font-heading">
              {product.name}
            </h2>
          </div>
        )}
        {!showBackButton && (
          <h2 className="text-3xl font-bold text-primary font-heading mb-8">
            {product.name}
          </h2>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Company Information Section */}
          {product.companyInfo && (
            <div className="mb-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary font-heading mb-4">
                  About {product.companyInfo.brand}
                </h3>
                <p className="text-lg text-tertiary leading-relaxed mb-4">
                  {product.companyInfo.description}
                </p>
                {product.companyInfo.leadership && (
                  <p className="text-lg text-tertiary leading-relaxed font-semibold">
                    {product.companyInfo.leadership}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Product Image Carousel and Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              {product.subProducts && product.subProducts.length > 0 ? (
                <div className="relative">
                  <div
                    className="rounded-xl overflow-hidden shadow-md bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setIsZoomOpen({ productId, isOpen: true })}
                  >
                    <div className="relative h-[400px] flex items-center justify-center">
                      <Image
                        src={product.subProducts[currentIndex].image}
                        alt={product.subProducts[currentIndex].name}
                        width={600}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Carousel Navigation */}
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() =>
                        setCarouselIndex((prev) => ({
                          ...prev,
                          [productId]:
                            (prev[productId] || 0) === 0
                              ? product.subProducts.length - 1
                              : (prev[productId] || 0) - 1,
                        }))
                      }
                      className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-blue-700 transition-colors"
                      aria-label="Previous image"
                    >
                      ← Previous
                    </button>

                    {/* Carousel Indicators */}
                    <div className="flex gap-2">
                      {product.subProducts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setCarouselIndex((prev) => ({
                              ...prev,
                              [productId]: index,
                            }))
                          }
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex
                              ? "bg-secondary"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setCarouselIndex((prev) => ({
                          ...prev,
                          [productId]:
                            (prev[productId] || 0) ===
                            product.subProducts.length - 1
                              ? 0
                              : (prev[productId] || 0) + 1,
                        }))
                      }
                      className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-blue-700 transition-colors"
                      aria-label="Next image"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              ) : product.image ? (
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : null}
            </div>
            <div>
              {product.features && (
                <div>
                  <h3 className="text-2xl font-bold text-primary font-heading mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span className="text-lg text-tertiary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Zoom Popup */}
        {isZoomOpen.isOpen &&
          isZoomOpen.productId === productId &&
          product.subProducts && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
              onClick={() => setIsZoomOpen({ productId: "", isOpen: false })}
            >
              <div
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() =>
                    setIsZoomOpen({ productId: "", isOpen: false })
                  }
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors shadow-lg"
                  aria-label="Close zoom"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.subProducts[currentIndex].image}
                    alt={product.subProducts[currentIndex].name}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                </div>

                {/* Navigation in popup */}
                {product.subProducts.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCarouselIndex((prev) => ({
                          ...prev,
                          [productId]:
                            (prev[productId] || 0) === 0
                              ? product.subProducts.length - 1
                              : (prev[productId] || 0) - 1,
                        }));
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-200 transition-colors shadow-lg z-10"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCarouselIndex((prev) => ({
                          ...prev,
                          [productId]:
                            (prev[productId] || 0) ===
                            product.subProducts.length - 1
                              ? 0
                              : (prev[productId] || 0) + 1,
                        }));
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-200 transition-colors shadow-lg z-10"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm text-gray-800">
                    {currentIndex + 1} / {product.subProducts.length}
                  </span>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  };

  // Initialize carousel indices for all products
  useEffect(() => {
    if (selectedCategory === "cij") {
      const initialIndices: Record<string, number> = {};
      cijProducts.forEach((product) => {
        if (product.id) {
          initialIndices[product.id] = 0;
        }
      });
      setCarouselIndex(initialIndices);
    } else if (selectedCategory === "tij") {
      const initialIndices: Record<string, number> = {};
      tijProducts.forEach((product) => {
        if (product.id) {
          initialIndices[product.id] = 0;
        }
      });
      setCarouselIndex(initialIndices);
    } else if (selectedCategory === "inspection") {
      const initialIndices: Record<string, number> = {};
      inspectionProducts.forEach((product) => {
        if (product.id) {
          initialIndices[product.id] = 0;
        }
      });
      setCarouselIndex(initialIndices);
    }
  }, [selectedCategory]);

  // Handle ESC key to close zoom popup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isZoomOpen.isOpen) {
        setIsZoomOpen({ productId: "", isOpen: false });
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isZoomOpen]);

  const renderProducts = () => {
    if (selectedCategory === "cij") {
      // Show all product details directly
      return (
        <div className="mt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary font-heading">
              Inkjet Date Printer (CIJ) Products
            </h2>
          </div>
          <div className="space-y-16">
            {cijProducts.map((product, index) => (
              <div key={index}>{renderProductDetails(product, false)}</div>
            ))}
          </div>
        </div>
      );
    }

    if (selectedCategory === "tij") {
      // Show all product details directly
      return (
        <div className="mt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary font-heading">
              Thermal Inkjet (TIJ) Printer Products
            </h2>
          </div>
          <div className="space-y-16">
            {tijProducts.map((product, index) => (
              <div key={index}>{renderProductDetails(product, false)}</div>
            ))}
          </div>
        </div>
      );
    }

    if (selectedCategory === "inspection") {
      // Show all product details directly
      return (
        <div className="mt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary font-heading">
              Workpiece Inspection Camera Products
            </h2>
          </div>
          <div className="space-y-16">
            {inspectionProducts.map((product, index) => (
              <div key={index}>{renderProductDetails(product, false)}</div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <Layout>
      <div className="bg-surface min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderProducts()}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
