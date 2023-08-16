"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import InputText from "@/components/InputText";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FullName {
  fullName: string;
  typed: boolean;
  success: boolean | undefined;
}
interface Phone {
  phone: string;
  typed: boolean;
  success: boolean | undefined;
}
interface Address {
  address: string;
  typed: boolean;
  success: boolean | undefined;
}
const Address = () => {
  const [fullName, setFullName] = React.useState<FullName>({
    fullName: "",
    typed: false,
    success: undefined,
  });
  const [phone, setPhone] = React.useState<Phone>({
    phone: "",
    typed: false,
    success: undefined,
  });
  const [address, setAddress] = React.useState<Address>({
    address: "",
    typed: false,
    success: undefined,
  });
  React.useEffect(() => {
    // add if it just whitespace or empty

    if (fullName.typed === true && fullName.fullName.trim().length === 0) {
      setFullName({ ...fullName, success: false });
    } else if (fullName.fullName.trim().length > 0) {
      setFullName({ ...fullName, typed: true, success: true });
    }

    if (phone.typed === true && phone.phone.trim().length === 0) {
      setPhone({ ...phone, success: false });
    } else if (phone.phone.trim().length > 0) {
      // Convert the phone string to a number
      const phoneNumber = Number(phone.phone.trim());
      // Check if the phone string contains a valid phone number
      if (isNaN(phoneNumber) || !Number.isInteger(phoneNumber)) {
        setPhone({ ...phone, typed: true, success: false });
      } else {
        setPhone({ ...phone, typed: true, success: true });
      }
    }

    if (address.typed === true && address.address.trim().length === 0) {
      setAddress({ ...address, success: false });
    } else if (address.address.trim().length > 0) {
      setAddress({ ...address, typed: true, success: true });
    }
  }, [fullName, phone, address]);
  return (
    <div>
      <h1
        className="
  text-2xl text-center font-lighter text-gray-900 dark:text-foreground
  leading-snug tracking-wide pt-2
  "
      >
        {" "}
        Choose an address{" "}
      </h1>
      <Separator className="mt-2 rounded-xl" />
      <article className="grid md:grid-cols-2 md:my-6 md:mx-5 se:mx-2 se:my-4 px-10  se:gap-1   sm:gap-10 ">
        <div className="flex flex-col gap-5 py-2">
          <InputText
            label="Full Name"
            placeholder="Full Name"
            Onchange={(e) =>
              setFullName({ ...fullName, fullName: e.target.value })
            }
            success={fullName.success}
          />
          <InputText
            label="City"
            disabled
            placeholder="Marrakech"
            Onchange={(e) => console.log(e.target.value)}
            span="Only in Marrakech , stay tuned for further notice"
          />

          <InputText
            label="Address"
            placeholder="Address"
            Onchange={(e) =>
              setAddress({ ...address, address: e.target.value })
            }
            success={address.success}
          />
          <InputText
            label="Phone Number"
            placeholder="+(212) (6/7) 00 00 00 00 "
            Onchange={(e) => setPhone({ ...phone, phone: e.target.value })}
            success={phone.success}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
          <Image
            src="/meme1.gif"
            alt="map"
            width={500}
            height={500}
            className="rounded-xl shadow-sm"
          />
          {/* <Button
            className="w-full border border-green-400 bg-white text-green-600 hover:bg-green-400 hover:text-white"
            variant="outline"
          >
            Save
          </Button> */}
        </div>
      </article>
    </div>
  );
};

export default Address;
