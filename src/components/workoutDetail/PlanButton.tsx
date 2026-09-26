"use client";

import { WorkoutContext, WorkoutContextType } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import React, { useContext } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { Bounce, toast } from "react-toastify";

const PlanButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(WorkoutContext) as WorkoutContextType;

  const isAlreadyAdded = plan.some((item) => item.id === workout.id);

  const handlePlanButton = () => {
    if (isAlreadyAdded) return;

    setPlan([...plan, workout]);

    toast.success(`🦄 Added to Today's Plan`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="w-full">
      <button
        onClick={handlePlanButton}
        disabled={isAlreadyAdded}
        className={`w-full flex-1 font-bold text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${
          isAlreadyAdded
            ? "bg-zinc-800 text-gray-400 border border-zinc-700 cursor-not-allowed opacity-75"
            : "bg-[#C2F800] hover:bg-[#d4ff33] text-black cursor-pointer shadow-md hover:shadow-[#c2f800]/20"
        }`}
      >
        {isAlreadyAdded ? (
          <>
            <BsCheckLg className="w-4 h-4 text-green-400" />
            Already in plan
          </>
        ) : (
          <>
            <AiFillFileAdd className="w-4 h-4" />
            Add to today&apos;s plan
          </>
        )}
      </button>
    </div>
  );
};

export default PlanButton;
