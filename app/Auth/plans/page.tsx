"use client";
import React from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { ModeToggle } from "@/components/theme";
import { BsFillPersonFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { MdOutlineRestaurant } from "react-icons/md";
import Address from "@/components/plans/Address";
import Profile from "@/components/plans/Profile";
import { Button } from "@/components/ui/button";

export default function Plans() {
  const load =
    typeof window !== "undefined" ? localStorage.getItem("step") : null;
  const [steps, setStep] = React.useState(load ? parseInt(load) : 0);
  if (typeof window !== "undefined") {
    const localSotrage = localStorage.setItem("step", steps.toLocaleString());
  }

  const RenderPlans = () => {
    switch (steps) {
      case 0:
        return <Address />;
      case 1:
        return <Profile />;
      case 2:
        return "<Plans/>";
      case 3:
        setStep(0);
      default:
        return <Address />;
    }
  };

  return (
    <main className="bg-[hsl(0,0%,97%)] dark:bg-[hsl(0,0%,11%)] w-screen h-screen">
      <div className="absolute top-20 right-10">
        <ModeToggle />
      </div>{" "}
      <nav className="relative bg-white dark:bg-[hsl(0,0%,7%)]">
        <ul
          className="sticky top-0 flex flex-row px-7 w-full 
        justify-center items-center gap-5 
        text-sm sm:text-lg font-semibold text-green-700 dark:text-foreground py-5
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
        className="
        absolute w-[80%] h-[80%] top-[8rem] right-[3rem] sm:right-[8rem] sm:top-[6rem]
        shadow-md rounded-xl
        bg-white dark:bg-[hsl(0,0%,8%)] dark:shadow-[hsl(0,2%,24%)] dark:shadow-have-shadow
      "
      >
        {RenderPlans()}
        <Button
          onClick={() => setStep(steps + 1)}
          className=" w-1/2
            absolute bottom-5 right-1/4 
            border border-green-400 bg-white text-green-600 hover:bg-green-400 hover:text-white"
          variant="outline"
        >
          Next
        </Button>
      </section>
    </main>
  );
}
