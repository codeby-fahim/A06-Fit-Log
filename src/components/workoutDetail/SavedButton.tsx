"use client";

import { WorkoutContext, WorkoutContextType } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import React, { useContext } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { MdBookmarkAdded } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const SavedButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(WorkoutContext) as WorkoutContextType;

  const isAlreadySaved = saved.some((item) => item.id === workout.id);

  const handleSavedButton = () => {
    if (isAlreadySaved) return;

    setSaved([...saved, workout]);

    toast.success(`🦄 Added to Save for Later`, {
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
        onClick={handleSavedButton}
        disabled={isAlreadySaved}
        className={`w-full flex-1 font-medium text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${
          isAlreadySaved
            ? "bg-zinc-800 text-gray-400 border border-zinc-700 cursor-not-allowed opacity-75"
            : "bg-transparent hover:bg-zinc-800 text-gray-200 border border-zinc-700 cursor-pointer"
        }`}
      >
        {isAlreadySaved ? (
          <>
            <BsBookmarkCheckFill className="w-4 h-4 text-[#C2F800]" />
            Saved
          </>
        ) : (
          <>
            <MdBookmarkAdded className="w-4 h-4" />
            Save for later
          </>
        )}
      </button>
    </div>
  );
};

export default SavedButton;
