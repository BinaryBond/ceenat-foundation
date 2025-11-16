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
    <main className="bg-gray-1 w-full fixed top-0  z-60 border-b border-gray-4">
      <nav className="container-wide nav-padding flex-between ">
        <div className="flex-center gap-0.5 max-w-[155px]">
          <Image
            className="w-10 h-10"
            src="/svg/logo.svg"
            width={80}
            height={80}
            alt="logo"
          />
          <p className="text-primary-default text-bodyLarge font-extrabold leading-[20px]">
            Ceenat Foundation
          </p>
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
            src="/svg/hamburger.svg"
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
    </main>
  );
}
