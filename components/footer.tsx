import React from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "About us", href: "/about" },
  { name: "Our Programs", href: "/programs" },
  { name: "Volunteeer", href: "/get-involved" },
  { name: "Donate", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function footer() {
  return (
    <footer className="bg-[#18171C] text-white flex flex-col gap-4 justify-between px-6 w-full pt-[42px] pb-[82px]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-white font-bold text-2xl">Ceenat Foundation</h1>
          <div>
            <h2 className="mb-1 text-base font-medium">Contact:</h2>
            <p className="text-[14px] font-medium">040 000 0000</p>
            <p className="text-[14px] font-medium">info2@Ceenat</p>
          </div>
          <div className="flex gap-3">
            <Link href="">
              <Image
                className="w-6 h-6"
                src="/svg/Facebook.svg"
                src="/svg/Facebook.svg"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>
            <Link href="">
              <Image
                className="w-6 h-6"
                src="/svg/Instagram.svg"
                src="/svg/Instagram.svg"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>
            <Link href="">
              <Image
                className="w-6 h-6"
                src="/svg/Twitter.svg"
                src="/svg/Twitter.svg"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>

            <Link href="">
              <Image
                className="w-6 h-6"
                src="/svg/LinkedIn.svg"
                src="/svg/LinkedIn.svg"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" text-[14px] font-medium hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-8">
        <div className="h-[0.4px] w-full bg-[#f9f9f9]" />
        <div className="flex flex-col gap-[22px] text-[14px] font-medium">
          <p>© 2025 CeenatFoundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="">
              <p>Privacy Policy</p>
            </Link>
            <Link href="">
              <p>Terms of Service</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
