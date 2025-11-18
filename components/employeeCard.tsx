interface SocialLink {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}
interface EmployeeCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  img?: string;
  name: string;
  position: string;
  details: string;
  socials?: SocialLink[];
}

export default function EmployeeCard({
  img,
  name,
  position,
  details,
  socials = [],
}: EmployeeCardProps) {
  return (
    <div
      className="
        min-w-[280px] max-h-[420px] md:min-w-[300px] md:max-h-[450px] lg:min-w-[320px] lg:max-h-[470px] xl:min-w-[350px] xl:max-h-[500px]
        bg-gray-1 shadow-md rounded-[18px] overflow-hidden
        snap-center
      "
    >
      <img
        src={img}
        alt={name}
        className="w-full h-1/2 md:h-[55%] lg:h-[60%] object-cover object-[50%_10%]"
      />

      <div className="h-1/2 md:h-[45%] lg:h-[40%] p-4 flex flex-col justify-center gap-2.5 text-center">
        <p className="text-sm font-semibold text-green-8 tracking-wide uppercase">
          {position}
        </p>

        <h3 className="font-semibold text-lg text-gray-11 capitalize">
          {name}
        </h3>
        <p className="text-gray-8 text-xs md:text-sm  font-medium">{details}</p>

        {/* Social icons */}
        <ul className="flex-center gap-4 pt-5 mt-2 border-t border-gray-2">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <li key={index}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5 text-gray-5 hover:text-green-8 hover:scale-105 transition-all duration-300 ease-in-out" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
