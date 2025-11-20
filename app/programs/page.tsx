import PageHeader from "../../components/pageHeader";
import Image from "next/image";
import ProgramText from "../../components/programText";
import FooterPics from "../../components/footerPics";

const programsInfo = [
  {
    title: "Feeding the Future",
    description:
      "Our Feeding Program brings warm, nutritious meals to children and families in need across Ghana through school and community feeding programs, holiday food drives, and emergency meal outreaches.",
  },
  {
    title: "Community Outreach",
    description:
      "We visit communities to share love, hope, and relief supplies including clothing, food, and healthcare support.",
  },
  {
    title: "Child Welfare & Education",
    description:
      "We support underprivileged children by donating school supplies, sponsoring school fees, and providing mentorship and counseling.",
  },
  {
    title: "Empowerment Initiatives",
    description:
      "We empower women and youth with practical skills and financial opportunities to lift their families out of poverty.",
  },
];
const imageUrls = [
  {
    src: "/img/footerPics/5.png",
    alt: "program image 1",
    label: "Feeding Program",
  },
  {
    src: "/img/footerPics/4.png",
    alt: "program image 2",
    label: "Community Outreach",
  },
  {
    src: "/img/programs/1.png",
    alt: "program image 3",
    label: "School Support",
  },
  {
    src: "/img/programs/2.png",
    alt: "program image 4",
    label: "Holiday Drives",
  },
  {
    src: "/img/programs/3.png",
    alt: "program image 5",
    label: "Child Welfare",
  },
  { src: "/img/programs/4.png", alt: "program image 6", label: "Empowerment" },
];

export default function page() {
  return (
    <div className="mt-[90px] overflow-x-hidden flex flex-col">
      <div className="section-padding min-h-screen">
        <PageHeader title="Our Programs" />
        {/* text with image */}
        <section className="container-wide w-full section-padding">
          <div className=" flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col gap-5 md:gap-10 md:flex-1">
              {programsInfo.map((program, index) => (
                <ProgramText
                  key={index}
                  title={program.title}
                  description={program.description}
                />
              ))}
            </div>
            <div className="w-full md:flex-1  rounded-3xl overflow-hidden">
              <Image
                src="/img/footerPics/4.png"
                width={1920}
                height={1080}
                alt="about image"
                className=" object-cover  w-full h-[320px] lg:max-w-[640px] md:h-full"
              />
            </div>
          </div>
        </section>

        {/* Moments from Our Programs - collage card */}
        <section className="px-2 w-full pt-10 md:pt-12 lg:pt-16 pb-6">
          <div className="container-wide rounded-3xl shadow-md p-4 md:p-6 lg:p-8 bg-white/30 border border-gray-3">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Moments from Our Programs
              </h2>
              <p className="text-xs md:text-sm text-gray-700 max-w-xl">
                A glimpse into the outreaches, school support, and community
                programs made possible by the generosity of our partners and
                volunteers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5 auto-rows-[120px] md:auto-rows-[140px] lg:auto-rows-[170px]">
              {imageUrls.map((image, index) => {
                let layoutClasses =
                  "col-span-1 row-span-1 h-[120px] md:h-auto lg:h-auto";

                if (index === 0) {
                  // Big hero top-left
                  layoutClasses =
                    "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
                } else if (index === 1) {
                  // Big hero top-right on md+
                  layoutClasses =
                    "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
                }

                return (
                  <div
                    key={index}
                    className={`${layoutClasses} rounded-2xl overflow-hidden bg-black/10`}
                  >
                    <Image
                      src={image.src}
                      
                      width={1920}
                      height={1080}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <FooterPics />
    </div>
  );
}
