import React from "react";
import PageHeader from "../../components/pageHeader";
import Image from "next/image";
import CVCards from "../../components/ui/coreValueCard";
import FooterPics from "../../components/footerPics";

const coreValues = [
  { img: "/svg/compassion.svg", text: "Compassion" },
  { img: "/svg/community.svg", text: "Community" },
  { img: "/svg/integrity.svg", text: "Integrity" },
  { img: "/svg/empowerment.svg", text: "Empowerment" },
  { img: "/svg/hope.svg", text: "Hope" },
];

export default function About() {
  return (
    <div className="mt-[90px] flex flex-col ">
      <div className="section-padding flex flex-col">
        <PageHeader
          title="About Us"
          quote="Born from Compassion. Built on Hope."
        />
        {/* text with image */}
        <div className=" container-wide section-padding">
          <div className="lg:h-[640px] flex flex-col gap-8 lg:flex-row">
            <p className="text-[0A0A0A] gap-4  lg:place-content-center lg:flex-1 text-BodyLarge md:text-xl flex flex-col ">
              <span>
                Ceenat Foundation is a Ghana-based non-profit organization
                dedicated to fighting poverty and improving child welfare.
              </span>
              <span>
                Our story began with a simple act of kindness — providing meals
                to children who had nothing to eat. That moment became a
                movement, inspiring us to extend our hands to families in need
                and entire communities struggling to survive.
              </span>
              <span>
                Today, Ceenat Foundation reaches hundreds of people through
                feeding drives, school support, and community empowerment
                programs.
              </span>
              <span>
                Together, we can turn the tide and create a world where hope is
                a reality for everyone.
              </span>
            </p>
            <div className="w-full md:flex-1  rounded-3xl overflow-hidden">
              <Image
                src="/img/about/aboutImage.png"
                width={1920}
                height={1080}
                alt="about image"
                className=" object-cover  w-full h-60 lg:max-w-[640px] lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* core values and mission */}
      <div className=" container-wide w-full   flex flex-col lg:flex-row lg:justify-between gap-14 section-padding">
        {/* CV */}
        <div className="flex flex-col flex-1 gap-4 md:gap-11">
          <h3 className="text-primary-default  text-headingSmall md:text-headingMedium font-bold text-center">
            Core Values
          </h3>
          <div className="flex flex-col md:grid grid-cols-2 md:gap-6 gap-4 ">
            {coreValues.map((coreValue) => (
              <CVCards
                key={coreValue.img}
                alt={coreValue.text}
                img={coreValue.img}
                text={coreValue.text}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 md:flex-row gap-6">
          {/* our mission */}
          <div className="flex-col flex md:text-center gap-4 max-w-[400px]">
            <h3 className="text-gray-10 text-headingSmall md:text-headingMedium font-bold">
              Our Mission
            </h3>
            <p className="text-bodyMedium text-[#4f4f4f] ">
              To alleviate poverty and promote child welfare by providing food,
              education, healthcare, and empowerment to vulnerable families
              across Ghana.
            </p>
          </div>
          {/*  */}
          <div className=" w-px bg-gray-6"></div>
          {/* our vision */}
          <div className="flex-col flex md:text-center gap-4 max-w-[400px]">
            <h3 className="text-gray-10 text-headingSmall font-bold">
              Our Vision
            </h3>
            <p className="text-bodyMedium text-[#4f4f4f] ">
              A Ghana where every child is fed, nurtured, and empowered to reach
              their full potential.
            </p>
          </div>
        </div>
      </div>
      {/* Our Team */}

      {/* FAQ */}

      {/* Footer pics */}
      <FooterPics />
    </div>
  );
}
