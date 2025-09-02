import React from "react";

const Careers = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why Fyris?</h2>
        <p className="text-gray-300 mt-2">
          Beyond Design. Beyond Tech. Beyond Branding.
        </p>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Left side - text */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <div>
            <h3 className="font-bold text-lg">✨ Design that thinks ahead.</h3>
            <p className="text-gray-400 text-sm">
              We craft user experiences that are elegant, intuitive, and built
              for tomorrow.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">🚀 Future-ready teams.</h3>
            <p className="text-gray-400 text-sm">
              Multidisciplinary thinkers who love turning complex challenges
              into simple, beautiful products.
            </p>
          </div>
        </div>

        {/* Center - image */}
        <div className="flex-shrink-0 md:w-1/3 flex justify-center">
          <img
            src="careers.png"
            alt="Fyris Logo"
            className="max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
          />
        </div>

        {/* Right side - text */}
        <div className="flex flex-col gap-8 md:w-1/2">
          <div>
            <h3 className="font-bold text-lg">
              🤝 Partnership, not just projects.
            </h3>
            <p className="text-gray-400 text-sm">
              We collaborate closely, treating your goals as our own.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">🎨 Data meets creativity.</h3>
            <p className="text-gray-400 text-sm">
              Every decision blends insight with imagination to fuel smarter
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
