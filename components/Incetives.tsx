import Image from "next/image";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { FcCalendar } from "react-icons/fc";

const incentives = [
  {
    name: "Fast shipping",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Shop with us, and your order's doorstep joy, confirmed in just one day!.",
  },
  {
    name: "No commitment",
    imageSrc: "/calendar.svg",
    description: "Skipping weeks or cancelling is super easy.",
  },
  {
    name: "Fresh veggies",
    imageSrc: "/vegis.png",
    description: "Our Fresh veggies from farms to your table.",
  },
];

export default function Incentive() {
  return (
    <div className="bg-gray-50 shadow-lg ">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-20 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Why should you shop with us?
              </h2>
              <p className="mt-4 text-gray-500">
                Fresh from farms to your table, our top-quality veggies and
                fruits come at the best prices and with lightning-fast shipping.
                Don&apos;t stress about busy days, we&apos;ve got you covered
              </p>
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/shop.jpg"
                alt="shopper looking at item at a store"
                width={1000}
                height={1000}
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
