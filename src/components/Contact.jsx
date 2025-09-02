import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center px-4">
      {/* Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
        We’d love to work with{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          you.
        </span>
      </h1>

      {/* Button */}
      <a
        href="#"
        className="px-6 py-2 rounded-full text-white font-medium 
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
        shadow-lg transition-transform transform hover:scale-105"
      >
        Let’s Chat
      </a>
    </div>
  );
};

export default Contact;
