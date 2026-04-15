interface Props {
  name: string
}

export default function PatternBadge({ name }: Props) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#2962ff]/20 text-[#6d9eeb] border border-[#2962ff]/30">
      {name}
    </span>
  )
}
