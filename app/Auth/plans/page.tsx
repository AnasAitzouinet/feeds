"use client";
import React, { useCallback, useEffect } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { ModeToggle } from "@/components/theme";
import { BsFillPersonFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { MdOutlineRestaurant } from "react-icons/md";
import Address from "@/components/plans/Address";
import Profile from "@/components/plans/Profile";
import { Button } from "@/components/ui/button";
import PlansCom from "@/components/Plans";
import { PuffLoader } from "react-spinners";

export default function Plans() {
  const [render, setRender] = React.useState(<Address />);
  const load =
    typeof window !== "undefined" ? localStorage.getItem("step") : null;
  const [steps, setStep] = React.useState(load ? parseInt(load) : 0);
  if (typeof window !== "undefined") {
    const localSotrage = localStorage.setItem("step", steps.toLocaleString());
  } else {
    return (
      <div
        className="
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      "
      >
        <PuffLoader size={100} color="green" />
      </div>
    );
  }

  const RenderPlans = () => {
    switch (steps) {
      case 0:
        return <Address />;
      case 1:
        return <Profile />;
      case 2:
        return <PlansCom />;
      case 3:
        setStep(0);
        break;
      default:
        return <Address />;
    }
  };

  //change the render when the step change

  return (
    <main className="bg-[hsl(0,0%,97%)] dark:bg-[hsl(0,0%,11%)] w-screen h-screen">
      <div className="absolute top-16 right-4 sm:top-[5rem]">
        <ModeToggle />
      </div>{" "}
      <nav className="relative bg-white dark:bg-[hsl(0,0%,7%)] ">
        <ul
          className=" top-0 flex flex-row px-10 sm:px-8 w-full  overflow-hidden
        justify-center items-center gap-2 sm:gap-5
        text-xs sm:text-lg font-semibold text-green-700 dark:text-foreground py-5
        shadow-md  dark:border-b pointer
        "
        >
          <li
            className={
              steps === 0
                ? `flex justify-center items-center gap-2 w-[7rem] cursor-pointer`
                : "flex justify-center items-center gap-2 w-[7rem] cursor-pointer text-gray-400"
            }
          >
            {" "}
            <FaRegAddressCard /> Address
          </li>
          <Separator className="w-10 border-green-400 border rounded-xl" />
          <li
            className={
              steps === 1
                ? `flex justify-center items-center gap-2 w-[7rem] cursor-pointer`
                : "flex justify-center items-center gap-2 w-[7rem] cursor-pointer text-gray-400"
            }
          >
            <BsFillPersonFill />
            Profile
          </li>
          <Separator className="w-10 border-green-400 border rounded-xl" />
          <li
            className={
              steps === 2
                ? `flex justify-center items-center gap-2 w-[7rem] cursor-pointer`
                : "flex justify-center items-center gap-2 w-[7rem] cursor-pointer text-gray-400"
            }
          >
            <MdOutlineRestaurant />
            Plans
          </li>
        </ul>
      </nav>
      <section
        className={
          steps !== 2
            ? `
        absolute w-[90%] h-[80%] top-[7rem] right-[1.5rem] sm:right-[3.5rem] sm:top-[7rem]
        shadow-md rounded-xl
        bg-white dark:bg-[hsl(0,0%,8%)] dark:shadow-[hsl(0,2%,24%)] dark:shadow-have-shadow`
            : "absolute w-screen h-[50vh] top-[6.5rem] p-2   "
        }
      >
        {RenderPlans()}
        {steps !== 2 && (
          <Button
            onClick={() => setStep(steps + 1)}
            className=" w-1/2
            absolute bottom-5 right-1/4 
            border border-green-400 bg-white text-green-600 hover:bg-green-400 hover:text-white"
            variant="outline"
          >
            Next
          </Button>
        )}
      </section>
    </main>
  );
}
