import Button from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Carousel from "../components/carousel";
import EmployeeCard from "./../components/employeeCard";
import { Instagram } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function Home() {
  const focusCards = [
    {
      title: "Feeding Programs",
      description:
        "Providing nutritious meals to hungry children and families.",
      icon: "/svg/foodBasket.svg",
    },
    {
      title: "Child Welfare",
      description: "Ensuring access to education, care, and emotional support.",
      icon: "/svg/children.svg",
    },
    {
      title: "Community Outreach",
      description: "Supporting struggling families with essentials and hope.",
      icon: "/svg/community.svg",
    },
    {
      title: "Empowerment",
      description: "Helping women and youth build skills for self-reliance.",
      icon: "/svg/fist.svg",
    },
  ];
  const employeesInfo = [
    {
      img: "img/carousel/director.jpg",
      name: "Cecilia Otoo",
      position: "director",
      details:
        "Providing direction and leadership to advance the foundation’s humanitarian goals.",
      socials: [
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaXTwitter, link: "#" },
        { Icon: Instagram, link: "#" },
      ],
    },
    {
      img: "img/carousel/ceo.jpg",
      name: "Nathaniel Whitaker",
      position: "ceo",
      details:
        "Committed to advancing the foundation’s mission with purpose and integrity.",
      socials: [
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaXTwitter, link: "#" },
        { Icon: Instagram, link: "#" },
      ],
    },
    {
      img: "img/carousel/pm.jpg",
      name: "Patrick Doodo",
      position: "Project Manager",
      details:
        "Coordinating initiatives that bring hope, growth, and transformation to communities.",
      socials: [
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaXTwitter, link: "#" },
        { Icon: Instagram, link: "#" },
      ],
    },
    {
      img: "img/carousel/admin.jpg",
      name: "Selina Gueli",
      position: "admin",
      details:
        "The backbone of the foundation’s activities, keeping every process organized and efficient.",
      socials: [
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaXTwitter, link: "#" },
        { Icon: Instagram, link: "#" },
      ],
    },
    {
      img: "img/carousel/manager.jpg",
      name: "Esther Dosoo",
      position: "Manager",
      details:
        "Ensuring effective management of the foundation’s people, programs, and priorities.",
      socials: [
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaXTwitter, link: "#" },
        { Icon: Instagram, link: "#" },
      ],
    },
    {
      img: "img/carousel/accountsofficer.jpg",
      name: "Emmanuel Mensah",
      position: "accounts officer",
      details:
        "Ensuring transparency and accountability in the foundation’s financial operations.",
      socials: [
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaXTwitter, link: "#" },
        { Icon: Instagram, link: "#" },
      ],
    },
    {
      img: "img/carousel/pr.jpg",
      name: "Teddy Cobbold",
      position: "Public Relations",
      details:
        "Working closely with communities to turn the foundation’s vision into action.",
      socials: [
        { Icon: FaFacebookF, link: "#" },
        { Icon: FaXTwitter, link: "#" },
        { Icon: Instagram, link: "#" },
      ],
    },
  ];
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero */}
      <section
        className="pt-6 pb-10 w-full container-wide flex flex-col gap-10 bg-opacity-60"
        style={{ backgroundImage: "url('/img/home/herobg.png')" }}
      >
        <p className="font-medium text-xl text-gray-11 text-center">
          Restoring Hope. Changing Lives.
        </p>
        <div
          className="mx-auto 
    multiple-strips-mask 
    bg-cover bg-center 
    w-[310px] h-[400px]
    md:w-[500px] md:h-[500px]
    lg:w-[485px] lg:h-[485px]
  "
          style={{ backgroundImage: "url('/img/home/hero.png')" }}
        ></div>
        <div>
          <ul className="flex flex-col gap-8">
            <ul className="flex flex-col gap-1">
              <li className="text-xl text-gray-11 font-bold">
                Lifting Lives with Love and Action
              </li>
              <li className="text-sm text-gray-8 font-medium">
                Empowering communities through compassion and hands-on support
                to create lasting change and uplift lives with love and action.
              </li>
            </ul>

            <Button
              text="Get Started"
              className="w-fit"
              icon={<ArrowRight className="w-5 h-5" />}
            />
          </ul>
        </div>
      </section>
      {/* What We Do */}
      <section className="flex flex-col gap-8 container-wide section-padding">
        {/* Intro */}
        <ul className="text-center flex flex-col gap-5">
          <ul className="space-y-1">
            <li className="section-title uppercase">What we do</li>
            <li className="section-max-title">
              Making a Difference, One Life at a Time.
            </li>
          </ul>
          <li className="section-subtext">
            At Ceenat Foundation, we are driven by love and compassion to bring
            hope where it’s needed most. Through our feeding programs, community
            outreach, and child welfare initiatives, we’re transforming lives —
            one meal, one smile, one family at a time.
          </li>
        </ul>
        {/* Our Focus and Image */}
        <div className="flex flex-col gap-[60px]">
          <div className="relative">
            <div className="absolute inset-0 bg-gray-10 opacity-50 rounded-2xl"></div>
            <Image
              src="/img/home/whatwedo.png"
              alt="hands on child face"
              width={180}
              height={180}
              className="w-full h-[358px] object-cover object-center rounded-2xl"
            />
          </div>
          <div className="space-y-10">
            <p className="section-title capitalize ">our focus</p>
            <div className="flex flex-col gap-4">
              {focusCards.map((card, index) => (
                <div
                  key={index}
                  className="flex-center gap-4 px-5 py-4 border border-gray-2 shadow-sm rounded-[12px]"
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={45}
                    height={45}
                    className="w-10 h-10"
                  />
                  <ul className="space-y-1.5">
                    <li className="text-base font-semibold text-gray-11">
                      {card.title}
                    </li>
                    <li className="text-sm font-medium text-gray-8">
                      {card.description}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Extra Info */}
        <p className="section-subtext">
          In many communities across Ghana, countless children go to bed hungry.
          Families struggle to find food, education, and support. <br /> We
          believe poverty should not steal a child’s future. Every act of
          kindness brings light into someone’s darkness — and together, we can
          build a Ghana where no one is left behind. <br /> Because every child
          deserves care, food, and a future.
        </p>
      </section>

      <section className="flex flex-col gap-10 container-wide section-padding">
        <ul className="space-y-1.5">
          <li className="section-title uppercase">Our Team</li>
          <li className="section-subtext">
            Dedicated minds driving our cause forward
          </li>
        </ul>

        <Carousel>
          {employeesInfo.map((info, index) => (
            <EmployeeCard
              key={index}
              img={info.img}
              name={info.name}
              position={info.position}
              details={info.details}
              socials={info.socials}
            />
          ))}
        </Carousel>
      </section>

      <section className="container-wide section-padding">
        <div className="border border-t border-primary-default px-5 py-6 rounded-[24px] flex flex-col lg:flex-row gap-10">
          {/* stats and info */}
          <div>
            <ul className="flex flex-wrap space-x-5 space-y-5">
              {[
                { title: "1200+", desc: "Children Fed" },
                { title: "25+", desc: "Schools Supported" },
                { title: "5000+", desc: "People Reached" },
                { title: "10", desc: "Years of Service" },
              ].map((stat, index) => (
                <li
                  key={index}
                  className="mb-6 bg-primary-default py-5 px-[45px] w-full text-green-1 rounded-[16px]"
                >
                  <p className="text-[32px] font-bold">{stat.title}</p>
                  <p className="text-sm font-medium">{stat.desc}</p>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-[20px] font-bold text-gray-11">
                Our Impact in Action
              </p>
              <p className="text-sm text-gray-8 mt-[18px]">
                Through compassion and community support, we're transforming
                lives across Ghana. Every donation brings hope to those who need
                it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <Button text="Donate Now" className="w-full" />
                <button className="text-primary-default border border-b border-primary-default">
                  Our Programs <BsArrowUpRightCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
            <ul className="flex flex-wrap gap-[14px]"></ul>
          </div>
          {/* Image */}
          <div></div>
        </div>
      </section>
    </main>
  );
}
