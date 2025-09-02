import React from "react";

const Work = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white px-6 mt-10 pt-10">
      <div className="relative w-full max-w-6xl flex justify-center">
        {/* Middle abstract image as background */}
        <img
          src="works.png" // replace with your path
          alt="abstract shape"
          className="h-[90vh] w-auto object-contain opacity-90"
        />

        {/* Gradient fade (top & bottom) */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* Mission (inside image, top-left) */}
        <div className="absolute top-[10%] left-6 md:left-12 text-left max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            Craft Intelligent, Scalable Digital Solutions That Unlock Growth.
          </p>
        </div>

        {/* Vision (inside image, bottom-right) */}
        <div className="absolute bottom-[10%] right-6 md:right-12 text-right max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            Be The Catalyst That Shapes Tomorrow&apos;s Leading Brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
