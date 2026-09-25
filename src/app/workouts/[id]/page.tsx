import { IWorkout } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IWorkoutDetailPageProps {
  params: Promise<{ id: string }>;
}

const getWorkouts = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    next: { revalidate: 3600 }, // পারফরম্যান্সের জন্য ১ ঘণ্টা ক্যাশ রিভ্যালিডেশন
  });
  if (!res.ok) {
    throw new Error("Workout data fetch failed");
  }
  const data = await res.json();
  return data;
};

const WorkoutDetailPage = async ({ params }: IWorkoutDetailPageProps) => {
  const { id } = await params;
  const workoutData = await getWorkouts();
  const workout = workoutData.find((workout: IWorkout) => String(workout.id) === String(id)
  );
    

  if (!workout) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      

      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#121318] p-6 sm:p-8 lg:p-10 rounded-2xl border border-zinc-800">
        
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <div className="relative w-full aspect-square sm:aspect-4/3 lg:aspect-square max-h-125 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-white uppercase">
              {workout.name}
            </h1>

            <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
              {workout.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {workout.muscleGroups?.map((group:string, index:number)  => (
                <span
                  key={index}
                  className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="bg-[#191B22] border border-zinc-800/80 rounded-xl p-4 sm:p-5 mt-6 space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-gray-400">
                <span className="uppercase font-medium tracking-wider">Equipment</span>
                <span className="text-white font-semibold">{workout.equipment}</span>
              </div>
              <div className="border-t border-zinc-800/60 pt-3 flex justify-between items-center text-gray-400">
                <span className="uppercase font-medium tracking-wider">Difficulty</span>
                <span className="text-white font-semibold">{workout.difficulty}</span>
              </div>
              <div className="border-t border-zinc-800/60 pt-3 flex justify-between items-center text-gray-400">
                <span className="uppercase font-medium tracking-wider">Sets</span>
                <span className="text-white font-semibold">{workout.sets}</span>
              </div>
              <div className="border-t border-zinc-800/60 pt-3 flex justify-between items-center text-gray-400">
                <span className="uppercase font-medium tracking-wider">Reps</span>
                <span className="text-white font-semibold">{workout.reps}</span>
              </div>
              <div className="border-t border-zinc-800/60 pt-3 flex justify-between items-center text-gray-400">
                <span className="uppercase font-medium tracking-wider">Duration</span>
                <span className="text-white font-semibold">{workout.duration} min</span>
              </div>
              <div className="border-t border-zinc-800/60 pt-3 flex justify-between items-center text-gray-400">
                <span className="uppercase font-medium tracking-wider">Calories</span>
                <span className="text-white font-semibold">{workout.caloriesBurned} kcal</span>
              </div>
              <div className="border-t border-zinc-800/60 pt-3 flex justify-between items-center text-gray-400">
                <span className="uppercase font-medium tracking-wider">Rating</span>
                <span className="text-white font-semibold">{workout.rating}</span>
              </div>
            </div>

            {workout.instructions && workout.instructions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide mb-3">
                  Instructions
                </h3>
                <ol className="space-y-2 text-gray-300 text-xs sm:text-sm list-decimal list-inside leading-relaxed">
                  {workout.instructions.map((step:string, idx:number) => (
                    <li key={idx} className="pl-1">
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-zinc-800">
            <button className="flex-1 bg-[#C2F800] hover:bg-[#d4ff33] text-black font-bold text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add to today&apos;s plan
            </button>

            <button className="flex-1 bg-transparent hover:bg-zinc-800 text-gray-200 border border-zinc-700 font-medium text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Save for later
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;


