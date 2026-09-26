'use client';
import { WorkoutContext, WorkoutContextType } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/workoutType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const SavedWorkoutCard = ({ workout }: { workout: IWorkout }) => {
  const {
    id,
    name,
    image,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

     const {setSaved} = useContext(WorkoutContext) as WorkoutContextType;
   
  const handleDeleteWorkout = (targetId: number) => {
    if (setSaved) {
      setSaved((prevSaved) => prevSaved.filter((item) => item.id !== targetId));
    }
  };

  return (
    <div className="bg-[#181A20] border border-zinc-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-zinc-700 transition-all duration-200 my-3">
      
      {/* বাম পাশ: ইমেজ এবং প্রাইমারি ইনফরমেশন */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative w-20 h-16 sm:w-28 sm:h-20 shrink-0 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wide">
            {name}
          </h3>
          <p className="text-xs text-gray-400 capitalize mt-0.5">
            {equipment}
          </p>

          <div className="flex items-center gap-3 mt-2 text-xs text-gray-300 flex-wrap">
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <span>{caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ডান পাশ: বাটন ও রিমুভ আইকন */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-zinc-800">
        <Link
          href={`/workouts/${id}`}
          className="text-xs font-semibold text-gray-300 hover:text-white px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors"
        >
          View Details
        </Link>

        <button className="flex items-center gap-1.5 text-xs font-bold text-black bg-[#C2F800] hover:bg-[#d4ff33] px-4 py-2 rounded-full transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5 stroke-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Mark as Done
        </button>

        {/* Delete / Remove Cross Icon */}
        <button 
          onClick={() => handleDeleteWorkout(id)}
          aria-label="Remove workout"
          className="text-gray-500 hover:text-red-500 text-sm font-bold pl-1 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>

    </div>
  );
};

export default SavedWorkoutCard;