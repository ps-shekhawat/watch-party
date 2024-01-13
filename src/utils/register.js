import { supabase } from "../supabase/client";

export const register = async (email, password) => {
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
  });
};
