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
import { Session } from "@supabase/auth-helpers-nextjs";
import {  SignUp } from "@/hooks/Auth";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";

interface props {
  session: Session | null;
}
function Signun({ session }: props) {
  const router = useRouter();
  const [Fullname, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [match, setMatch] = React.useState<boolean>(false);
  const [check, setCheck] = React.useState({
    terms: false,
    remember: false,
  });
  const [error, setError] = React.useState({
    error: false,
    email: false,
    password: false,
    Fullname: false,
    check: check.terms ? false : false,
  });

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
        Fullname: Fullname === "",
      }));
      // check if all the error state set to false then submit the form
      if (
        error.email === false &&
        error.password === false &&
        error.Fullname === false &&
        match === false &&
        check.terms === true &&
        check.remember === true &&
        error.check === false
      ) {
        // submit the form
        const data = await SignUp({session,credentials}).then((res) => {
          if (res === "success") {
            toast.success('Account created successfully')
            router.push("/auth");

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

  React.useEffect(() => {
    if (password === confirmPassword) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  }, [password, confirmPassword]);

  return (
    <Card className="h-[80vh]">
      <form onSubmit={handleSubmit}>
        <Toaster />
        <CardHeader className="py-3 sm:pb-2 sm:pt-5">
          <CardTitle className="text-md sm:text-2xl" >Welcome to feeds</CardTitle>
          <CardDescription className="text-sm sm:text-md">Create your account:</CardDescription>
        </CardHeader>
        <CardContent className="py-2 px-5">
          <div className="space-y-1">
            <Label
              htmlFor="fname"
              className={error.Fullname ? "text-red-500 text-xs sm:text-sm" : " text-xs sm:text-sm"}
            >
              Full name
            </Label>
            <Input
              id="fname"
              placeholder="Jhon Doe"
              className={error.Fullname ? "ring-red-500 border-red-500 " : ""}
              onChange={(e) => setFullName(e.target.value)}
            />
            {error.Fullname ? (
              <p className="text-red-500 text-[10px]  sm:text-xs italic">
                Can&apos;t be empty!
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="name" className={error.email ? "text-red-500 text-xs  sm:text-sm" : " text-xs sm:text-sm"}>
              Email
            </Label>
            <Input
              id="name"
              type="email"
              className={error.email ? "ring-red-500 border-red-500 " : ""}
              placeholder="jhon@doe.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email ? (
              <p className="text-red-500 text-[10px] text-xs italic">
                Can&apos;t be empty!
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="space-y-1">
            <Label
              htmlFor="pass"
              className={error.password ? "text-red-500 text-xs sm:text-sm" : " text-xs sm:text-sm"}
            >
              Password
            </Label>
            <Input
              id="pass"
              type="password"
              className={error.password ? "ring-red-500 border-red-500 " : ""}
              placeholder="your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.Fullname ? (
              <p className="text-red-500 text-[10px] text-xs italic">
                Can&apos;t be empty!
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="con-pass" className={match ? "text-red-500 text-xs sm:text-sm" : " text-xs sm:text-sm"}>
              Confirm Password
            </Label>
            <Input
              id="con-pass"
              type="password"
              className={match ? "ring-red-500 border-red-500 " : ""}
              placeholder="confirm your password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {match ? (
              <p className="text-red-500 text-[10px] text-xs italic">
                Password does not match.
              </p>
            ) : (
              ""
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-0 sm:px-5">
          <div className="flex items-center pl-2 space-x-2 ">
            <Checkbox
              id="termss"
              onCheckedChange={(checked) => {
                const value = checked.valueOf();
                if (typeof value === "boolean") {
                  setCheck((prevCheck) => ({ ...prevCheck, terms: value }));
                }
              }}
            />
            <label
              htmlFor="termss"
              className="text-xs  sm:text-sm w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
            {error.check ? (
              <p className="text-red-500 text-[10px] italic">Must check</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center pl-2 space-x-2">
            <Checkbox
              id="terms"
              onCheckedChange={(checked) => {
                const value = checked.valueOf();
                if (typeof value === "boolean") {
                  setCheck((prevCheck) => ({ ...prevCheck, remember: value }));
                }
              }}
            />
            <label
              htmlFor="terms"
              className="text-xs  sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Button
            type="submit"
            className="w-full px-0 h-8 text-xs bg-gray-800 text-white dark:hover:bg-gray-100 dark:hover:text-gray-800"
            variant="outline"
          >
            Register
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Signun;
