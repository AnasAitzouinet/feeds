"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg  relative">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Feeds</span>
            <Image
              src="/logo.png"
              className="h-10 w-auto"
              alt="logo of feeds company"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <a
            href="#pricing"
            className="text-sm  font-semibold leading-6 text-gray-900 hover:text-green-700"
          >
            Our plans
          </a>
          <a
            href="#how-we-works"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-700"
          >
            How we work
          </a>
          <a
            href="/about-us"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-700"
          >
            About us
          </a>
        </Popover.Group>
        <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
          <Button className="border border-green-400 w-[30%] bg-white text-green-600 hover:bg-green-400 hover:text-white">
            <a href="/Auth">Sign in</a>
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Feeds</span>
              <Image
                src="/logo.png"
                className="h-10 w-auto"
                alt="logo of feeds company"
                width={100}
                height={100}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Our plans
                </a>
                <a
                  href="#how-we-works"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  How we work
                </a>
                <a
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </a>
              </div>
              <Separator />

              <div className="py-6 flex flex-col gap-5">
                <Button className="border border-green-400 bg-white text-green-600 hover:bg-green-400 hover:text-white">
                  <a href="/Auth">Sign in</a>
                </Button>
                {/* <Button className=" bg-green-400 text-white px-5 hover:bg-green-700 hover:text-white">
                  <a href="/Auth/Sign-in">Sign up</a>
                </Button> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
