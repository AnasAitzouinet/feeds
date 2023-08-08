import Features from "@/components/Features";
import Incentive from "@/components/Incetives";
import Pricing from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <article className="flex justify-center items-center ">
        <Image
          src="/hero1.jpg"
          className="h-[30rem] object-cover"
          alt="hero image"
          width={5000}
          height={500}
        />
        <h1 className="absolute text-4xl text-center sm:w-[50%] tracking-tight text-gray-900 sm:text-6xl ">
          Eat healthy, delicious food without the hassle with Feeds.
          <br />
          <Button   className="sm:w-[20rem] space-y-2 bg-green-600 hover:bg-green-900 text-gray-200">
            <Link href="/our-plans">Our plans</Link>
          </Button>
        </h1>
      </article>
      <Incentive/>
      <Features/>
      <Pricing/>
    </section>
  );
};

export default page;
