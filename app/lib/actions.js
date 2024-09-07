"use server";
import { z } from "zod";
import { endpoints } from "./data";

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
})

export async function sendMessage(prevState,formData){
    const validatedData=MessageSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if(!validatedData.success) return {
        success: false, form_data: formData,
        errors: validatedData.error.flatten().fieldErrors,
        message: "Unfortunately your message was not sent",
    }

    const requestBody={
        name: formData.get("username"),
        sender: formData.get("email"),
        receiver: "studytime023@gmail.com",
        message: formData.get("message"),
    }
    const response=await fetch(endpoints.contact,{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(requestBody),
    });

    const results=await response.json();
    if(!response.ok) {
        console.log(results);
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