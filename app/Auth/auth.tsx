"use client";

import Signin from "@/components/auth/Signin";
import Signun from "@/components/auth/Sigup";
import { ModeToggle } from "@/components/theme";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Session } from "@supabase/auth-helpers-nextjs";

interface props {
  session: Session | null;
}
const Auth = ({ session }: props) => {
  return (
    <main className="relative flex flex-row justify-center items-center h-screen w-screen">
      <div className="absolute top-10 right-10">
        <ModeToggle />
      </div>
      <Tabs defaultValue="Sign-In" className="w-[30rem] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Sign-In">Sign-In</TabsTrigger>
          <TabsTrigger value="Sign-up">Sign-up</TabsTrigger>
        </TabsList>
        <TabsContent value="Sign-In">
          <Signin session={session}/>
        </TabsContent>
        <TabsContent value="Sign-up">
          <Signun session={session}/>
        </TabsContent>
      </Tabs>
    </main>
  );
};
export default Auth;
