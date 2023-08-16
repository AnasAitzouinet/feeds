"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { Switch } from "@nextui-org/react";
// import {Switch} from "@nextui-org/switch";
// import { MoonIcon } from "@/components/icon/MoonIcon";
// import { SunIcon } from "@/components/icon/SunIcon";
export function ModeToggle() {
  const { setTheme } = useTheme();
  // const [isSelected, setIsSelected] = React.useState(true);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
  // React.useEffect(() => {
  //   if (!isSelected) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, [isSelected,setTheme]);

  // return (
  //   <Switch
      
  //     size="lg"
  //     color="primary"
  //     isSelected={isSelected}
  //     onValueChange={setIsSelected}
  //     thumbIcon={({ isSelected, className }: any) =>
  //       isSelected ? (
  //         <SunIcon className={className} />
  //       ) : (
  //         <MoonIcon className={className} />
  //       )
  //     }
  //   ></Switch>
  // );
}
