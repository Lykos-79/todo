import React from "react";

export default function Services() {
  return (
    <section className="relative w-full bg-black text-white flex items-center justify-center px-6 py-16">
      {/* Wave Image as background */}
      <img
        src="services.png"
        alt="wave design"
        className="absolute bottom-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay text */}
      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-lg md:text-xl">
          From Startups With Big Dreams To Enterprises Seeking Next-Level
          Growth,
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          We Help Brands Unlock{" "}
          <span className="text-blue-400">What’s Next.</span>
        </h1>

        <div className="mt-6">
          <h2 className="font-bold text-lg">Our Story Is Simple</h2>
          <ul className="mt-3 space-y-2 text-gray-300 text-sm md:text-base">
            <li>We Ask The Right Questions.</li>
            <li>We Design With Empathy.</li>
            <li>We Build With Precision.</li>
            <li>We Grow, Together.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
