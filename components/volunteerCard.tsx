import Image from "next/image";
import Button from "./ui/button";

interface VolunteerCardProps {
  imgSrc: string;
  title: string;
  description: string;
  btnText: string;
  iconSrc: string;
  onClick?: () => void;
  btnClassName?: string;
}

export default function volunteerCard({
  imgSrc,
  iconSrc,
  title,
  onClick,
  description,
  btnText,
  btnClassName,
}: VolunteerCardProps) {
  return (
    <div>
      {/* icon */}
      <div className="bg-primary-default rounded-full p-4md:p-[26px] w-11 h-[72px] ">
        <Image
          src={iconSrc}
          width={1920}
          height={1080}
          alt="img"
          className=" w-full "
        />
      </div>
      {/* text */}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button className={`${btnClassName}`} text={btnText} onClick={onClick} variant="outline" />
      </div>
    </div>
  );
}
// 44 72
