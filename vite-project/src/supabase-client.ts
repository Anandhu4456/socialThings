import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://ioddilsdljtzvguepeno.supabase.co";
const supabaseAnnon = import.meta.env.VITE_SUPABASE_ANNON_KEY as string;

export const supabase = createClient(supabaseURL, supabaseAnnon);