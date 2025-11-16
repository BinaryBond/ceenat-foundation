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
  secondBtn?: boolean;
  secondbtnText?: string;
  onClick2?: () => void;
  startingIcon?: React.ReactNode;
  startingIcon2?: React.ReactNode;
  variant?: "outline" | "default";
}

export default function volunteerCard({
  imgSrc,
  iconSrc,
  title,
  onClick,
  description,
  btnText,
  btnClassName,
  secondBtn,
  secondbtnText,
  onClick2,
  variant = "outline",
  startingIcon,
  startingIcon2,
}: VolunteerCardProps) {
  return (
    <div className="flex flex-col  lg:w-full  ">
      {/* icon */}
      <div className="bg-primary-default rounded-full mb-4 w-fit h-fit p-4 md:p-[26px] ">
        <Image
          src={iconSrc}
          width={1920}
          height={1080}
          alt="img"
          className=" w-[44px] md:w-[72px] "
        />
      </div>
      <div className="flex flex-col gap-10 lg:flex-row w-full">
        {/* text */}
        <div className="flex flex-col max-w-[480px] gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-displaySmall font-bold ">{title}</h3>
            <p className="text-bodySmall text-[#4f4f4f]">{description}</p>
          </div>
          <div className="flex gap-6">
            <Button
              className={`${btnClassName} `}
              text={btnText}
              onClick={onClick}
              variant={variant}
              startingIcon={startingIcon}
            />
            {secondBtn && (
              <Button
                className={`${btnClassName} `}
                text={secondbtnText || ""}
                onClick={onClick2}
                variant={variant}
                startingIcon={startingIcon2}
              />
            )}
          </div>
        </div>
        {/* image */}
        <div className="rounded-lg overflow-hidden max-w-[480px] lg:max-w-[462px] h-[300px] md:h-[420px] lg:h-[440px]">
          <Image
            src={imgSrc}
            width={1920}
            height={1080}
            alt="img"
            className="  object-cover  h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}
// 44 72
