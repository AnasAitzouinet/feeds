export const dynamic = 'force-dynamic'
import React from "react";
import Auth from "./auth";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
const page = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div>
      <Auth  session={session}/>
    </div>
  );
};

export default page;
