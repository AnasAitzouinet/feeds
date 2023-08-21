"use client";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useState } from "react";
import { Separator } from "../ui/separator";

const data = [
  {
    id: 1,
    title: "Carbs",
    image: "/SVG/Carbs.svg",
    selected: false,
  },
  {
    id: 2,
    title: "Calories",
    image: "/SVG/Calories.svg",
    selected: false,
  },
  {
    id: 3,
    title: "Diets",
    image: "/SVG/Diet.svg",
    selected: false,
  },
  {
    id: 4,
    title: "Healty",
    image: "/SVG/Healty portion.svg",
    selected: false,
  },
  {
    id: 5,
    title:"low Carbs",
    image: "/SVG/Low Carbs.svg",
  },
  {
    id: 6,
    title: "Low Fats",
    image: "/SVG/Low Fat.svg",
  }
];
const Profile = () => {
  const [datas, setData] = useState(data);
  return (
    <div className="grid gap-1">
      <header className="pt-4 px-2">
        <h1 className="text-md sm:text-xl text-center text-neutral-800 ">
          What describe your food type
        </h1>
        <h3 className=" text-xs pt-1  text-center text-neutral-500">
          Your preferences help us show you the most relevant recipes first.
          You&apos;ll still have access to all recipes each week!
        </h3>
      </header>

        <main className="py-2 px-4 grid grid-cols-2 sm:grid-cols-3 gap-5    ">
          {datas.map((item) => (
            <Card
              radius="lg"
              isBlurred
              className={
                item.selected
                  ? `border border-green-600 bg-[#f8f8f8] rounded-lg  text-green-500 `
                  : `border bg-[#f8f8f8] rounded-lg text-green-500 `
              }
              shadow="sm"
              key={item.id}
              isPressable
              onPress={() => {
                setData(
                  datas.map((data) =>
                    data.id === item.id
                      ? { ...data, selected: !data.selected }
                      : data
                  )
                );
              }}
            >
              <CardBody className="overflow-visible p-5">
                <h3 className={item.selected ? 'text-xs text-green-600 ' : 'text-xs p-0 text-neutral-800'}>{item.title}</h3>
                <Image
                  shadow="sm"
                  width="100%"
                  alt={item.title}
                  className="w-full h-[30px]  sm:h-[100px]"
                  src={item.image}
                />
              </CardBody>
            </Card>
          ))}
        </main>
    </div>
  );
};

export default Profile;
