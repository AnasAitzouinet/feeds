"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { SignIn} from "@/hooks/Auth";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";

import { Session } from "@supabase/auth-helpers-nextjs";



interface props {
    session: Session | null;
  }
function Signin({ session }: props) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState({
    email: false,
    password: false,
  })
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const  credentials = { email, password } 
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;

    try {
      setError((prevError) => ({
        ...prevError,
        email: email === "" || !emailRegex.test(email),
        password: password === "",
      }));
      // check if all the error state set to false then submit the form
      if (
        error.email === false &&
        error.password === false 

      ) {
        // submit the form
        const data = await SignIn({session,credentials}).then((res) => {
          if (res === "success") {
            toast.success('Login successfully')
            // router.push("/auth");

          } else if (res === "signed-in"){
            toast.error('Already signed in');
            router.refresh();
          }
          else {
            toast.error("Something went wrong");
            router.refresh();
          }
        });
      }
    } catch (e) {
      console.log("something went wrong");
      setError((prevError) => ({
        ...prevError,
        error: true,
      }));
    }
  };
  return (
    <Card >
      <form onSubmit={handleSubmit}>
        <Toaster />
        <CardHeader>
          <CardTitle className="text-md sm:text-2xl">Welcome to feeds</CardTitle>
          <CardDescription className="">Log in to your Account :</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Email</Label>
            <Input id="name" placeholder="jhon@doe.com" 
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Password</Label>
            <Input id="username" type="password" placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5">
          <div className="flex items-center pl-2 space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Remember me
            </label>
          </div>
          <Button
            type="submit"
            className="w-full bg-gray-800 text-white dark:hover:bg-gray-100 dark:hover:text-gray-800"
            variant="outline"
          >
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Signin;
