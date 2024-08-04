"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";



export async function registerForOpen(formData) {

    const supabase = createClient();

    const  data = 
        await supabase.from("open_participants")
        .insert(formData);


    return data;
}

export async  function insertData(passedObj)  {
    //console.log(passedObj) sanitize, and check
        
    //console.log('first', data.status == 201 && !data.error, data)
    

    const supabase = createClient();

    const  data = 
        await supabase.from("main_participants")
        .insert(passedObj);


    return data;
};

 