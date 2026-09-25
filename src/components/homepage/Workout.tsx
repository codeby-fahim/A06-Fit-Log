import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import { IWorkout } from '@/types/workoutType';


const getWorkouts = async()=>{
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  if(!res.ok){
    throw new Error("Workout Data not fetch")
  }
  const data = res.json();
  return data;
}


const Workout = async() => {
  const workoutData = await getWorkouts();
  return (
    <div className='container mx-auto my-10'>
      <div className='mb-8'>
        <h2 className='text-3xl'>THE LIBRARY</h2>
      <p>Twelve lifts covering every major muscle group.</p>
      </div>
      <div>
      {
        workoutData.map((workout: IWorkout)=>{
          return <WorkoutCard workout={workout} key={workout.id}></WorkoutCard>
        })
      }
    </div>
    </div>
    
  );
};

export default Workout;