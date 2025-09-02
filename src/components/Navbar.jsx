import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src="/icon.png" alt="Fyris Technologies" className="h-7 w-7" />
          <span className="text-sm font-semibold text-white">
            Fyris Technologies
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="bg-gradient-to-r from-fuchsia-600 to-indigo-500 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow hover:brightness-110"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="bg-neutral-900/90 rounded-2xl border border-white/10 p-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
