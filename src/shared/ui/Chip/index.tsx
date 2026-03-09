type ChipPropsType = {
  readonly children: React.ReactNode;
}

export const Chip = ({ children }: ChipPropsType) => {
  return <span className="absolute left-2 top-2 rounded-[5px] border border-black/5 bg-white px-1 py-1 text-[10px] font-bold uppercase leading-[100%] text-[#404040] backdrop-blur-[7.5px]">
    {children}
  </span>
}
