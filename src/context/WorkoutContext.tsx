'use client'
import { IWorkout } from "@/types/workoutType";
import {  createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface WorkoutContextType{
  plan: IWorkout[];
  setPlan: Dispatch<SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: Dispatch<SetStateAction<IWorkout[]>>;

} 

export const WorkoutContext = createContext<WorkoutContextType | null >(null); 

const WorkoutProvider = ({children}:{children: ReactNode})=>{

  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const sharedData: WorkoutContextType={
    plan,
    setPlan,
    saved,
    setSaved
  }
  
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  )


}

export default WorkoutProvider;