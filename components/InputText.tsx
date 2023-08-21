"use client";

import React, { useEffect, useId } from "react";
import {
  QuestionMarkCircleIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import { 
  Input
} from "@/components/ui/input"
interface InputTextProps {
  label: string;
  placeholder: string;
  Onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  success?: boolean;
  className?: string;
  disabled?: boolean;
  span?:string
}
const InputText = ({
  label,
  placeholder,
  Onchange,
  success,
  className,
  disabled,
  span
}: InputTextProps) => {
  const [SwitchclassName, setSwitchclassName] = React.useState<string>("");
  function getClassName(success: InputTextProps["success"]) {
    switch (success) {
      case true:
        return "focus:border-green-500 focus:ring-green-500  border-green-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md";
      case false:
        return "focus:ring-red-500 focus:border-red-500 border-red-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md";
      default:
        return " block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md";
    }
  }
  useEffect(() => {
    const SwitchclassName = getClassName(success);
    setSwitchclassName(SwitchclassName);
  }, [success]);
  const IdLabel = useId();

  return (
    <div>
      <label
        htmlFor={IdLabel}
        className="block text-xs sm:text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <Input
          type="text"
          onChange={Onchange}
          disabled={disabled}
          id={IdLabel}
          className={SwitchclassName
          + `${disabled ? " bg-gray-100" : ""}`
          }
          placeholder={placeholder}
        />
        <span
            className="text-[12px] text-gray-400 dark:text-foreground
            italic
            "
            > {span} </span>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {success ? (
            <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
          ) : (success === undefined ? (
            <div className="hidden">none</div>
          ) : (
            <XMarkIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputText;
