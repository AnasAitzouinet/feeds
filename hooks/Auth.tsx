import { Database } from "@/types/supabase";
import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";

interface Sign {
  session: Session | null;
  credentials: { email: string; password: string };
}

export const SignIn = async ({ session, credentials }: Sign) => {
  if (session) {
    // There is already a user signed in
    // Handle this case as desired
    return "signed-in";
  } else {
    const supabase = createClientComponentClient<Database>();
    try {
      const { error, data } = await supabase.auth.signInWithPassword(
        credentials,
      );
      if (error) {
        // Handle any errors that may occur during the sign-in process
        return error.message;
      } else {
        return "success";
      }
    } catch (error) {
      // handle the error
      console.error(error);
    }
  }
};


export const SignUp = async ({ session, credentials }: Sign) => {
  if (session) {
    // There is already a user signed in
    // Handle this case as desired
    return "signed-in";
  } else {
    const supabase = createClientComponentClient<Database>();
    try {
      const { error, data } = await supabase.auth.signUp(
        {
          email: credentials.email,
          password: credentials.password,
          options: {
              emailRedirectTo: `${location.origin}/auth/callback`,
            },
        }
        
        );
      if (error) {
        // Handle any errors that may occur during the sign-in process
        return error.message;
      } else {
      return "success";
      }
    } catch (error) {
      // Handle any errors that may occur during the sign-in process
      return error;
    }
  }
};
