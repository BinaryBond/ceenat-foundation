
interface ProgramTextProps {
    title: string;
    description: string;
}

export default function programText({title, description}: ProgramTextProps) {
  return (
    <div className="flex flex-col gap-2   max-w-[509px]">
        <h3 className="text-[16px] md:text-[18px] font-bold">{title}</h3>
        <p className="text-[12px] md:text-[16px] ">{description}</p>
    </div>
  )
}
