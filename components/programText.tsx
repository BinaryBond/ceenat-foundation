
interface ProgramTextProps {
    title: string;
    description: string;
}

export default function programText({title, description}: ProgramTextProps) {
  return (
    <div className="flex flex-col gap-2 max-w-[509px]">
        <h3 className="text-headingSmall font-bold">{title}</h3>
        <p className="text-bodySmall">{description}</p>
    </div>
  )
}
