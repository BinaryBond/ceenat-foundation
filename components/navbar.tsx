"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "News & Events", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white flex justify-between border-b border-[#e0e0e0]  items-center px-6 py-2.5 relative z-50">
        <div className="flex items-center max-w-[155px]">
          <Image
            className="w-[35px] h-[33.95px]"
            src="/LOGO.svg"
            width={80}
            height={80}
            alt="logo"
          />
          <h3 className="text-primary-default text-[14px] font-extrabold leading-4">
            Ceenat Foundation
          </h3>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black text-[14px] font-medium hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Image
            className="w-[21px] h-4 hover:cursor-pointer"
            src="/hamburger.svg"
            width={80}
            height={80}
            alt="menu"
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full z-40">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-black text-[14px] font-medium py-2 hover:text-primary-default transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
