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
  key?: React.Key;
}

export default function EmployeeCard({
  img,
  name,
  position,
  details,
  socials = [],
  key,
}: EmployeeCardProps) {
  return (
    <div
      key={key}
      className="
        min-w-[280px] max-h-[420px]
        bg-gray-1 shadow-md rounded-[18px] overflow-hidden
        snap-center
      "
    >
      <img
        src={img}
        alt={name}
        className="w-full h-1/2 object-cover object-[50%_10%]"
      />

      <div className="h-1/2 p-4 flex flex-col justify-center gap-3 text-center">
        <p className="text-sm font-semibold text-green-8 tracking-wide uppercase">
          {position}
        </p>

        <h3 className="font-semibold text-lg text-gray-11 capitalize">
          {name}
        </h3>
        <p className="text-gray-8 text-xs font-medium">{details}</p>

        {/* Social icons */}
        <ul className="flex-center gap-4 pt-3 mt-2 border-t border-gray-2">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <li key={index}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5 text-gray-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
