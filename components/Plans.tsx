"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const PlansCom = () => {
  const [hover, setHover] = useState(false);
  const [mealsHover, setMealsHover] = useState(false);
  const router = useRouter();

  const stepsFun = () => {
    // const localSotrage = localStorage.setItem("step", "3");
    console.log("clicked");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center  gap-5 py-5   ">
      <div
        onClick={stepsFun}
        className=" focus:scale-50 focus:transform focus:transition-all focus:duration-500 focus:ease-in-out"
      >
        <Card
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="rounded-xl cursor-pointer shadow-2xl hover:shadow-blue-500  hover:scale-105  
           transition-all 
           "
        >
          <CardHeader
            className={
              hover ? "absolute z-10 top-1  flex-col !items-center w-full " : "hidden"
            }
          >
            <p className="text-tiny text-white uppercase font-bold">
              Meals Service
            </p>
            <h4 className="text-white/80 font-medium text-center">
              Fresh meals with recipe and ingredients
            </h4>
          </CardHeader>
          <CardBody className="overflow-hidden p-0 ">
            <Image
              isZoomed
              classNames={{
                zoomedWrapper: " rounded-xl ",
              }}
              alt="Card background"
              className="z-0 w-[300px]   object-cover
              hover:blur-md hover:brightness-50	 bg-blue-400 h-[70vh] 
              
              "
              src="/meals.png"
            />
            {hover ? (
              <div className="absolute z-10 top-1/3 w-full text-white flex flex-col !items-center">
                <div className="">
                  <p className="text-lg text-white uppercase font-bold">
                    What Will You Get
                  </p>
                  <ul className="text-right text-green-300/80 font-medium flex flex-col gap-1 pl-2">
                    <li className="flex flex-row items-center gap-1">
                      <CheckBadgeIcon className="w-8 " />{" "}
                      <h3 className="py-auto">3 meals per week</h3>{" "}
                    </li>
                    <li className="flex flex-row items-center gap-1">
                      <CheckBadgeIcon className="w-8 " />{" "}
                      <h3 className="py-auto">Ingredient</h3>{" "}
                    </li>
                    <li className="flex flex-row items-center gap-1">
                      <CheckBadgeIcon className="w-8 " />{" "}
                      <h3 className="py-auto">Recipe</h3>{" "}
                    </li>
                  </ul>
                  <span className="text-[12px] italic text-gray-300">
                    &quot;click to subscribe to this offer&quot;
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </CardBody>
        </Card>
      </div>
      <div>
        <Card
          onMouseEnter={() => setMealsHover(true)}
          onMouseLeave={() => setMealsHover(false)}
          className=" rounded-xl cursor-pointer shadow-2xl hover:shadow-green-500 transform hover:scale-105 transition-all"
        >
          <CardHeader
            className={
              mealsHover
                ? " transition-all absolute z-10 top-1 flex-col !items-center"
                : "hidden"
            }
          >
            <p className="text-tiny text-white uppercase font-bold">
              Veggies and Fruit Service
            </p>
            <h4 className="text-white/80 font-medium ">
              Fresh veggies and fruit to your door
            </h4>
          </CardHeader>
          <CardBody className="overflow-hidden p-0 ">
            <Image
              isZoomed
              classNames={{
                zoomedWrapper: " rounded-xl ",
              }}
              alt="Card background"
              className="z-0 w-[300px]  object-cover
              hover:blur-md hover:brightness-50	 bg-blue-400 h-[70vh] 
              "
              src="/del.png"
            />
            {mealsHover ? (
              <div className="absolute z-10 top-1/3 w-full text-white flex flex-col !items-center">
                <p className="">
                  <p className="text-lg text-white uppercase font-bold">
                    What Will You Get
                  </p>
                  <ul className="text-right text-green-300/80 font-medium flex flex-col gap-1 pl-2">
                    <li className="flex flex-row items-center gap-1">
                      <CheckBadgeIcon className="w-8 " />{" "}
                      <h3 className="py-auto">3 meals per week</h3>{" "}
                    </li>
                    <li className="flex flex-row items-center gap-1">
                      <CheckBadgeIcon className="w-8 " />{" "}
                      <h3 className="py-auto">Ingredient</h3>{" "}
                    </li>
                    <li className="flex flex-row items-center gap-1">
                      <CheckBadgeIcon className="w-8 " />{" "}
                      <h3 className="py-auto">Recipe</h3>{" "}
                    </li>
                  </ul>
                  <span className="text-[12px] italic text-gray-300">
                    &quot;click to subscribe to this offer&quot;
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PlansCom;
