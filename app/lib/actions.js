"use server";
import { z } from "zod";
import { data, endpoints } from "./data";
import { notFound } from "next/navigation";

const MessageSchema=z.object({
    username: z.string().min(1,{
        message:"Provide your official name"
    }).max(50,{
        message: "Ensure your name is at most 50 characters"
    }),
    email: z.string().min(1,{
        message:"Provide your email"
    }).email({
        message:"Ensure your email is in the following format; jdoe@gmail.com"
    }),
    message: z.string().min(1,{
        message:"Provide your message"
    }).max(250,{
        message:"Ensure your message is at most 250 characters"
    }),
    receiver: z.string({
        invalid_type_error:"Don't tamper with the receiver details"
    }).min(1,{
        message:"Don't tamper with the receiver details"
    }).email({
        message:"Ensure the receiver email is reverted to its original state"
    }),
})

export async function sendMessage(prevState,formData){
    const validatedData=MessageSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        message: formData.get("message"),
        receiver: formData.get("receiver"),
    });

    if(!validatedData.success) return {
        success: false, form_data: formData,
        errors: validatedData.error.flatten().fieldErrors,
        message: "Unfortunately your message was not sent",
    }

    const requestBody={
        name: validatedData.data.username,
        sender: validatedData.data.email,
        receiver: validatedData.data.receiver,
        message: validatedData.data.message,
    }
    const response=await fetch(endpoints.contact,{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(requestBody),
    });

    const results=await response.json();
    if(!response.ok) {
        return{
            success: false, form_data: formData,
            message: "Unfortunately your message was not sent",
            errors:{
                non_field_errors:[
                    response.status===400?
                    "Please confirm that you have filled in the details correctly and try again.":
                    "There's a problem with the system and we are currently working to fix it. Please try again later."
                ]
            },
        }
    }

    return {
        success: true,
        message: "Your message has been sent"
    }
}

export async function fetchData(endpoint){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data[endpoint];
}

export async function fetchAPIData(endpoint){
    const response=await fetch(endpoints[endpoint],{
        method: "GET",
        headers:{"Content-Type":"application/json"},
    });

    const results=await response.json();
    if(!response.ok){
        if(response.status===404) notFound();
        else if(response.status===429) throw new Error(`CUSTOM APPLICATION ERROR: You have made too many request. Please try again later`);
        else throw new Error(`CUSTOM APPLICATION ERROR: Something went wrong but we are working on it`);
    }

    return results;
}