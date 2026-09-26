"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { WorkoutContext, WorkoutContextType } from "@/context/WorkoutContext";

const Navbar = () => {
  const { plan, saved } = useContext(WorkoutContext) as WorkoutContextType;
  const planCount = plan.length;
  const savedCount = saved.length;
  const link = (
    <>
      <li>
        <Link className="hover:text-[#C2F800]" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#C2F800]" href="/workouts">
          Workouts
        </Link>
      </li>
      <li>
        <Link className="hover:text-[#C2F800]" href="/myplan">
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link href="/" className="flex gap-2 items-center font-bold text-xl">
            <Image src={logo} alt="fit logo" width={32} height={32} />
            FITLOG
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{link}</ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          {/* Plan Badge */}
          <Link
            href="/myplan"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <span>Plan</span>
            <span className="bg-[#CCFF00] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
              {planCount}
            </span>
          </Link>

          <Link
            href="/saved"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <span>Saved</span>
            <span className="bg-zinc-800 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs border border-zinc-700">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
