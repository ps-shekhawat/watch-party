import { supabase } from "../supabase/client";

export const login = async (email, password) => {
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
};
