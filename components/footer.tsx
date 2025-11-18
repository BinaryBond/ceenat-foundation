import React from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "About us", href: "/about" },
  { name: "Our Programs", href: "/programs" },
  { name: "Volunteeer", href: "/volunteer" },
  { name: "Contact", href: "/contact" },
];

export default function footer() {
  return (
    <footer className="bg-[#18171C] text-white flex flex-col gap-4 justify-between px-6 w-full pt-[42px] pb-[82px]">
      <div className="container-wide flex flex-col  w-full gap-[30px]">

          <Link className="w-fit" href='/'><h1 className="w-fit text-white font-bold text-2xl">Ceenat Foundation</h1></Link>
      <div className="flex flex-col md:flex-row md:justify-between gap-[30px]">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="mb-1 text-base font-medium">Contact:</h2>
            <Link href='' className="hover:text-primary-hover transition-colors"><p className="text-[14px] font-medium">040 000 0000</p></Link>
            <Link href='' className="hover:text-primary-hover transition-colors"><p className="text-[14px] font-medium">info2@Ceenat</p></Link>
          </div>
          <div className="flex gap-3">
            <Link className="group" href="">
              <Image
                className="w-6 h-6 group-hover:scale-125 transition-transform"
                src="/svg/facebook.svg"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>
            <Link className="group" href="">
              <Image
                className="w-6 h-6 group-hover:scale-125 transition-transform"
                src="/svg/Instagram.svg"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>
            <Link className="group" href="">
              <Image
                className="w-6 h-6 group-hover:scale-125 transition-transform"
                src="/svg/Twitter.svg"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>

            <Link className="group" href="">
              <Image
                className="w-6 h-6 group-hover:scale-125 transition-transform"
                src="/svg/linkedIn.svg"
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
              className=" text-[14px] font-medium hover:text-primary-hover transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-8 ">
        <div className="h-[0.4px] w-full bg-[#f9f9f9]" />
        <div className="flex flex-col md:flex-row md:justify-between gap-[22px] text-[14px] font-medium">
          <p>© 2025 CeenatFoundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="">
              <p className="hover:text-primary-hover transition-colors">Privacy Policy</p>
            </Link>
            <Link href="">
              <p className="hover:text-primary-hover transition-colors ">Terms of Service</p>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
