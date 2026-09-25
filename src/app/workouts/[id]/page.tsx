import { IWorkout } from "@/types/workoutType";


interface IWorkoutDetailPageProps{
  params: Promise<{id:string}>;
}
const getWorkouts = async()=>{
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  if(!res.ok){
    throw new Error("Workout data not fetch")
  }
  const data = await res.json();
  return data
}

const WorkoutDetailPage = async({params}: IWorkoutDetailPageProps) => {
  const {id} = await params;
  const workoutData = await getWorkouts();
  const workout = workoutData.find((workout: IWorkout)=> String(workout.id) === String(id));
  return (
    <div>
      <h2>{workout.description}</h2>
    </div>
  );
};

export default WorkoutDetailPage;


