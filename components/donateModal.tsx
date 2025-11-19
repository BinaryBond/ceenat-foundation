"use client";

import { useState } from "react";
import Portal from "./portal";
import { HiX } from "react-icons/hi";
import Image from "next/image"
import Button from "./ui/button";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<
    number | "custom" | null
  >(null);
  const [frequency, setFrequency] = useState<"monthly" | "once">("monthly");

  if (!isOpen) return null;

  return (
    <Portal>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex-center px-4"
        onClick={onClose}
      >
        {/* Modal Container */}
        <div
          className="relative w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="z-30 cursor-pointer absolute -top-3 -right-3 text-primary-hover p-1.5 bg-green-1 hover:bg-green-3 rounded-full transition-all duration-300 ease-in-out border border-green-3"
          >
            <HiX size={16} />
          </button>

          <div className="px-4 pt-4 pb-12 herorow:px-8 herorow:py-8 md:pt-6 relative bg-gray-1 w-full  rounded-2xl shadow-xl  flex flex-col gap-6 herorow:flex-row  herorow:justify-around animate-fadeIn overflow-y-auto scrollbar-hide max-h-[90vh]">
            <div className="relative w-full herorow:w-[45%] min-h-[250px] sm:min-h-[300px] herorow:h-auto rounded-2xl overflow-hidden">
              <div className="absolute z-10 inset-0 bg-[#0C2C34]/40 backdrop-blur-[1px] rounded-2xl"></div>
              <Image
                src="/img/donate-modal/saveTheFuture.png"
                fill
                alt="children img"
                className="object-cover object-center"
              />

              <div
                className="absolute z-20 inset-0 flex items-center herorow:items-end 
                  justify-center herorow:justify-start p-4 sm:p-6 herorow:p-8"
              >
                <h1
                  className="text-white text-3xl sm:text-4xl herorow:text-5xl 
                   font-bold leading-tight drop-shadow-lg text-center herorow:text-left"
                >
                  We Can <br /> Save The <br /> Future
                </h1>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-full space-y-5 herorow:w-1/2 ">
              {/* Header */}
              <div className="flex items-center gap-1 mb-4">
                <img
                  src="/svg/logo.svg"
                  alt="Ceenat Foundation"
                  className="w-10 h-10 xl:w-[45px] xl:h-[45px]"
                />
                <h2 className="text-primary-default text-lg md:text-[20px] xl:text-[22px] font-bold md:font-extrabold leading-5">
                  Ceenat Foundation
                </h2>
              </div>
              <ul className="flex flex-col gap-3 md:gap-4">
                <li className="text-base md:text-lg xl:text-xl text-gray-11 font-semibold md:font-bold">
                  Thank you for choosing to give!
                </li>
                <li className="text-sm text-gray-8 font-medium">
                  Fill in the form below and be part of a life-changing impact.
                </li>
              </ul>

              {/* Donation Type */}
              <div className="flex flex-col space-y-3 md:space-y-4">
                <label className="text-gray-11 text-sm md:text-[15px] font-medium md:font-semibold">
                  Choose a donation type
                </label>
                <select className="focus:outline-none cursor-pointer bg-gray-3 text-sm font-medium w-full border border-gray-300 px-3 py-4 rounded-[12px] text-gray-8">
                  <option>Education Support</option>
                  <option>Medical Aid</option>
                  <option>Food Relief</option>
                  <option>Community Projects</option>
                </select>
              </div>

              <div className="flex flex-col space-y-3 md:space-y-4">
                {/* Donation Amount */}
                <label className="text-gray-11 text-sm md:text-[15px] font-medium md:font-semibold">
                  Select a donation amount
                </label>

                <div className="flex items-center gap-6">
                  {[100, 250, 500, 1000].map((amt) => (
                    <label
                      key={amt}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="donationAmount"
                        value={amt}
                        checked={selectedAmount === amt}
                        onChange={() => setSelectedAmount(amt)}
                        className="h-4 w-4 text-gray-9 focus:ring-primary-default"
                      />
                      <span className="text-[15px] md:text-lg font-medium">
                        ₵{amt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <button
                onClick={() => setSelectedAmount("custom")}
                className="text-primary-default font-semibold underline text-sm mb-4"
              >
                Enter a custom amount
              </button>

              {selectedAmount === "custom" && (
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full mb-4 border border-gray-3 focus:outline-gray-8 px-3 py-2 rounded-lg"
                />
              )}

              <div className="flex flex-col space-y-3 md:space-y-4">
                {/* Frequency */}
                <label className="text-gray-11 text-sm md:text-[15px] font-medium md:font-semibold">
                  How frequent do you want to donate?
                </label>

                <div className="flex items-center gap-4 mt-2 mb-4">
                  <label className={`flex items-center gap-2 cursor-pointer py-3.5 pl-4 pr-12 border rounded-[8px] ${frequency === "monthly" ? "bg-green-1 border-green-3" : "bg-gray-2 border-gray-3"}`}>
                    <input
                      type="radio"
                      name="frequency"
                      value="monthly"
                      checked={frequency === "monthly"}
                      onChange={() => setFrequency("monthly")}
                      className="h-4 w-4 text-[#005B52] focus:ring-[#005B52]"
                    />
                    <span className="text-lg font-medium">Monthly</span>
                  </label>

                  <label className={`flex items-center gap-2 cursor-pointer py-3.5 pl-4 pr-12 border rounded-[8px] ${frequency === "once" ? "bg-green-1 border-green-3" : "bg-gray-2 border-gray-3"}`}>
                    <input
                      type="radio"
                      name="frequency"
                      value="once"
                      checked={frequency === "once"}
                      onChange={() => setFrequency("once")}
                      className="h-4 w-4 text-[#005B52] focus:ring-[#005B52]"
                    />
                    <span className="text-lg font-medium">One time</span>
                  </label>
                </div>

                <p className="text-gray-6 text-sm font-medium herorow:font-semibold mb-6">
                  Every Cedi Counts!
                </p>
              </div>

              {/* Buttons */}
              <div className="herorow:flex hidden w-full flex justify-between gap-3">
                <Button text="Cancel" variant="outline" className="flex-1" />
                <Button text="Checkout" className="flex-1" />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="border-t border-gray-3 shadow-sm w-full absolute bottom-0 herorow:hidden bg-gray-1 py-4 px-4 rounded-b-2xl flex gap-4 items-center justify-around">
            <Button text="Cancel" variant="outline" className="flex-1" />
            <Button text="Checkout" className="flex-1" />
          </div>
        </div>
      </div>
    </Portal>
  );
}
