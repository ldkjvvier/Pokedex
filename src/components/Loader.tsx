export const Loader = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-[40px] h-[40px] bg-[#666666] rounded-full overflow-hidden border-[2px] border-white animate-spin">
        <div className="absolute w-[40px] h-[20px] bg-gray-[#666666] border-b-[2px] border-white -top-[2px]"></div>
        <div className="absolute w-[12px] h-[12px] bg-[#666666] border-[3px] border-gray-[#666666] rounded-full bottom-[12px] right-[12px] z-10"></div>
      </div>
    </div>
  );
};
