"use server";
import { z } from "zod";
import { data, endpoints } from "./data";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { encrypt } from "@lib/components/auth/actions";

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
});

const LoginSchema=z.object({
    username:z.string().min(1,{
        message:"Provide your username"
    }),
    password:z.string().min(1,{
        message:"Provide your password",
    })
});

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

export async function loginAccount(prevState,formData){
    const validatedData=LoginSchema.safeParse({
        username:formData.get("username"),
        password:formData.get("password"),
    });
    if(!validatedData.success) return{
        success:false,form_data:formData,
        errors:validatedData.error.flatten().fieldErrors,
        message:"There are some issues with the data you've provided",
    };

    const requestBody={
        username:validatedData.data.username,
        password:validatedData.data.password,
    };
    const response=await fetch(endpoints.login,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(requestBody),
    });

    let results=await response.json();
    if(!response.ok) return {
        success: false, form_data: formData,
        message: "Unfortunately we couldn't log you into your account",
        errors:{
            non_field_errors:[
                response.status===400?
                "Please confirm that you have filled in the details correctly and try again.":
                "There's a problem with the system and we are currently working to fix it. Please try again later."
            ]
        },
    };

    (await cookies()).set(
        process.env.COOKIE_AUTH,
        await encrypt({token:results.token}),
        {httpOnly: true,secure: true,sameSite: "lax",}
    );

    return{
        success:true,
        message:`Welcome Back ${validatedData.data.username}`
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
