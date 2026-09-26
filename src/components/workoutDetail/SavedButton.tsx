'use client'
import { WorkoutContext, WorkoutContextType } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/workoutType';
import React, { useContext } from 'react';
import { MdBookmarkAdded } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';

const SavedButton = ({workout}:{workout:IWorkout}) => {

  const {saved, setSaved} = useContext(WorkoutContext) as WorkoutContextType;

  const handleSavedButton=()=>{
    setSaved([...saved, workout]);
    toast.success(`🦄 Added Save for Later`, {
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
  }
  return (
    <div>
      <button onClick={()=>handleSavedButton()} className="flex-1 bg-transparent hover:bg-zinc-800 text-gray-200 border border-zinc-700 font-medium text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <MdBookmarkAdded />
              Save for later
            </button> 
      
    </div>
  );
};

export default SavedButton;