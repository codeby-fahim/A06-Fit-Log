'use client'
import { WorkoutContext, WorkoutContextType } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/workoutType';
import React, { useContext } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { Bounce, toast } from 'react-toastify';

const PlanButton = ({workout}: {workout: IWorkout}) => {
  const {plan, setPlan} = useContext(WorkoutContext) as WorkoutContextType;

  const handlePlanButton =()=>{
    setPlan([...plan, workout]);
    toast.success('🦄 Successfully Added!', {
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
      <button onClick={()=> handlePlanButton()} className="flex-1 bg-[#C2F800] hover:bg-[#d4ff33] text-black font-bold text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <AiFillFileAdd />
              Add to today&apos;s plan
            </button>
    </div>
  );
};

export default PlanButton;