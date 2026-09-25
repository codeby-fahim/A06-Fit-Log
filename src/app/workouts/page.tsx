import WorkoutCard from '@/components/shared/WorkoutCard';
import { IWorkout } from '@/types/workoutType';
import React from 'react';



const getWorkouts= async()=>{
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  if(!res.ok){
    throw new Error("Workout data no fetch")
  }
  const data = await res.json();
  return data;
}

const WorkoutsPage = async() => {
  const workoutData = await getWorkouts();
  return (
    <div className='container mx-auto my-10'>
      <div className='mb-8'>
        <h2 className='text-3xl'>THE LIBRARY</h2>
      <p>Twelve lifts covering every major muscle group.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        workoutData.map((workout: IWorkout)=>{
          return <WorkoutCard workout={workout} key={workout.id}></WorkoutCard>
        })
      }
    </div>
    </div>
  );
};

export default WorkoutsPage;