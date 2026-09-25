import Image from "next/image";
import banner from '@/assets/banner.png'
const Banner = () => {
  return (
    <div className="flex gap-2 justify-between container mx-auto px-5 py-30 rounded-2xl   bg-[#252832] my-14">
      <div >
        <p className="text-[#C2F800] mb-5">WORKOUT LIBRARY</p>
        <h2 className="text-6xl font-bold mb-5">TRAIN WITH INTENT. LOG<br/> EVERY SET.</h2>
        <p className="mb-10">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/> into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="bg-[#C2F800] px-4 py-2 rounded text-black cursor-pointer">BROWSE WORKOUTS</button>
      </div>
      <div>
        <Image src={banner} alt="banner pic"></Image>
      </div>
    </div>
  );
};

export default Banner;
