// import { IWorkout } from '@/types/workoutType';
// import React from 'react';

// const WorkoutCard = ({workout}:{workout: IWorkout}) => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default WorkoutCard;


import { IWorkout } from '@/types/workoutType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <div className="bg-[#191B22] border border-[#2A2D3A] rounded-xl overflow-hidden hover:border-[#3A3D4E] transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* কার্ডের উপরের অংশ: ইমেজ এবং কনটেন্ট */}
      <div>
        {/* ইমেজের সেকশন */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-900">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* কার্ডের বডি সেকশন */}
        <div className="p-4 sm:p-5">
          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-black text-[10px] sm:text-xs font-bold uppercase px-2.5 py-0.5 rounded"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide line-clamp-1">
            {name}
          </h3>

          {/* Equipment */}
          <p className="text-xs sm:text-sm text-gray-400 mt-1 capitalize">
            {equipment}
          </p>

          {/* Info Stats (Duration, Calories, Rating) */}
          <div className="flex items-center gap-3 sm:gap-4 mt-4 text-xs sm:text-sm text-gray-300">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <span>{caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* কার্ডের নিচের অংশ: View Details Button */}
      <div className="p-4 sm:p-5 pt-0">
        <Link
          href={`/workouts/${id}`}
          className="block w-full text-center bg-[#252832] hover:bg-[#C2F800] text-gray-200 hover:text-black font-semibold text-xs sm:text-sm py-2.5 rounded-lg border border-[#3A3D4E] hover:border-[#C2F800] transition-colors duration-200"
        >
          View Details
        </Link>
      </div>

    </div>
  );
};

export default WorkoutCard;