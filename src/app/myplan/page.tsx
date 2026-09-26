"use client";
import ListedWorkoutCard from "@/components/workoutDetail/ListedWorkoutCard";
import SavedWorkoutCard from "@/components/workoutDetail/SavedWorkoutCard";
import { WorkoutContext, WorkoutContextType } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const { plan, saved } = useContext(WorkoutContext) as WorkoutContextType;
  const [shortBy, setShortBy] = useState<"rating" | "duration" | "calories">(
    "duration",
  );

  const sortedWorkout = (workout: IWorkout[]) => {
    const sortedWorkout = [...workout];

    if (shortBy === "duration") {
      sortedWorkout.sort((a, b) => a.duration - b.duration);
    } else if (shortBy === "rating") {
      sortedWorkout.sort((a, b) => a.rating - b.rating);
    } else if (shortBy === "calories") {
      sortedWorkout.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }
    return sortedWorkout;
  };
  const sortPlan = sortedWorkout(plan);
  const sortSaved = sortedWorkout(saved);

  // Calories & Minutes Count
  const exercisesCount = plan.length + saved.length;
  const planeMinutes = plan.reduce((acc, item) => item.duration + acc, 0);
  const savedMinutes = saved.reduce((acc, item) => item.duration + acc, 0);
  const totalMinutes = planeMinutes + savedMinutes;
  const planCalories = plan.reduce((acc, item) => item.caloriesBurned + acc, 0);
  const savedCalories = saved.reduce(
    (acc, item) => item.caloriesBurned + acc,
    0,
  );
  const totalCalories = planCalories + savedCalories;

  return (
    <div className="container mx-auto px-3 my-10">
      <div className="w-full bg-[#121318] text-white p-6 md:p-8 rounded-xl border border-zinc-800">
        {/* টাইটেল এবং সাবটাইটেল সেকশন */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* স্ট্যাটস কার্ড কনটেইনার */}
        <div className="bg-[#181A20] border border-zinc-800/80 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-zinc-800">
            {/* ১. Exercises Stats */}
            <div className="flex flex-col sm:px-6 first:pl-0">
              <span className="text-gray-400 text-xs sm:text-sm font-medium mb-1">
                Exercises
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#C2F800]">
                {exercisesCount}
              </span>
            </div>

            {/* ২. Minutes Stats */}
            <div className="flex flex-col sm:px-6">
              <span className="text-gray-400 text-xs sm:text-sm font-medium mb-1">
                Minutes
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white">
                {totalMinutes}
              </span>
            </div>

            {/* ৩. Calories Stats */}
            <div className="flex flex-col sm:px-6 last:pr-0">
              <span className="text-gray-400 text-xs sm:text-sm font-medium mb-1">
                Calories
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white">
                {totalCalories}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right my-4 ">
        <h2 className="my-2">Short By</h2>
        <select
          value={shortBy}
          onChange={(e) =>
            setShortBy(e.target.value as "rating" | "duration" | "calories")
          }
          defaultValue="duration"
          className=" select select-success"
        >
          <option disabled={true}>Short By</option>

          <option value={"rating"}>Rating</option>
          <option value={"duration"}>Duration</option>
          <option value={"calories"}>Calories</option>
        </select>
      </div>
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortPlan.length > 0 ? (
            sortPlan.map((workout: IWorkout) => {
              return (
                <ListedWorkoutCard
                  workout={workout}
                  key={workout.id}
                ></ListedWorkoutCard>
              );
            })
          ) : (
            <div className="w-full bg-[#121318] border border-dashed border-zinc-800 rounded-2xl py-16 sm:py-24 px-6 flex flex-col items-center justify-center text-center my-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white mb-2">
                NOTHING HERE YET
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workouts"
                className="bg-[#C2F800] hover:bg-[#d4ff33] text-black font-bold text-xs sm:text-sm py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-[#c2f800]/20"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortSaved.length > 0 ? (
            sortSaved.map((workout: IWorkout) => {
              return (
                <SavedWorkoutCard
                  workout={workout}
                  key={workout.id}
                ></SavedWorkoutCard>
              );
            })
          ) : (
            <div className="w-full bg-[#121318] border border-dashed border-zinc-800 rounded-2xl py-16 sm:py-24 px-6 flex flex-col items-center justify-center text-center my-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white mb-2">
                NOTHING HERE YET
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workouts"
                className="bg-[#C2F800] hover:bg-[#d4ff33] text-black font-bold text-xs sm:text-sm py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-[#c2f800]/20"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
