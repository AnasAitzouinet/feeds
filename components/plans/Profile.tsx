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
    <div className="grid grid-cols- gap-2">
      <aside
        className="
    p-5
"
      >
        <h1 className="text-xl text-center text-neutral-800 ">
          What describe your food type
        </h1>
        <h3 className="text-sm text-center text-neutral-500">
          Your preferences help us show you the most relevant recipes first.
          You&apos;ll still have access to all recipes each week!
        </h3>
        <main className="py-5 px-4 grid grid-cols-3 gap-5    ">
          {datas.map((item) => (
            <Card
              radius="lg"
              isBlurred
              className={

                item.selected
                  ? `border border-green-600 bg-[#f8f8f8] rounded-lg   `
                  : `border bg-[#f8f8f8] rounded-lg  `
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
              <CardBody className="overflow-visible ">
                <h3 className="text-sm">{item.title}</h3>
                <Image
                  shadow="sm"
                  width="100%"
                  alt={item.title}
                  className="w-full  h-[100px] "
                  src={item.image}
                />
              </CardBody>
            </Card>
          ))}
        </main>
      </aside>
      {/* <Separator/> */}
      {/* <aside>
        test
      </aside> */}
    </div>
  );
};

export default Profile;
