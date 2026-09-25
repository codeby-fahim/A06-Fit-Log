

import Image from "next/image";
import banner from '@/assets/banner.png'

const Banner = () => {
  return (
   
    <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-6 py-10 lg:py-30 lg:px-10 rounded-2xl bg-[#252832] my-14 gap-8">
      
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-[#C2F800] mb-3 text-sm lg:text-base font-medium">WORKOUT LIBRARY</p>
        
       
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-5 leading-tight">
          TRAIN WITH INTENT. LOG
          <span className="lg:block"> EVERY SET.</span>
        </h2>
        
        
        <p className="text-sm md:text-base mb-8 lg:mb-10 text-gray-300 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        
        <button className="bg-[#C2F800] px-6 py-3 rounded text-black font-semibold cursor-pointer text-sm lg:text-base transition hover:bg-[#d4ff33]">
          BROWSE WORKOUTS
        </button>
      </div>
      
     
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image 
          src={banner} 
          alt="fit logo" 
          width={400} 
          height={300} 
          className="w-full h-auto max-w-75 sm:max-w-100 lg:max-w-125" 
          priority 
        />
      </div>
    </div>
  );
};

export default Banner;
