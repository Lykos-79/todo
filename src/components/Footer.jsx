import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/icon.png" alt="Fyrix Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-400">Fyris Technologies</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider mb-4">INFO</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                For customers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider mb-4">
            CONTACT US
          </h4>
          <p className="text-gray-400">+1 980 971-24-19</p>
          <p className="text-gray-400">hello@logoipsum.com</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider mb-4">FIND US</h4>
          <p className="text-gray-400">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </p>
          <p className="text-gray-400">Everyday from 10 am to 8 pm</p>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
        <h1 className="text-[15rem] md:text-[25rem] font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Fyris
        </h1>
      </div>

      <div className="text-center text-gray-400 text-sm py-4">
        © 2023 — Copyright
      </div>
    </footer>
  );
}
