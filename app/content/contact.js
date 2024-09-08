import { useActionState, useEffect, useState } from "react";
import { sendMessage } from "../lib/actions";
import { blackOpsOne, cutiveMono } from "../ui/fonts";

export default function Contact(){
    const [message,setMessage]=useState(false);
    const [formState,formAction,pending]=useActionState(sendMessage,null);

    useEffect(()=>{
        setMessage(!!formState);
        if(formState?.success) setTimeout(()=>setMessage(false),5000);
    },[formState]);

    return (
        <div 
            id="contact"
            className={`content-container ${cutiveMono.className}`}
        >
            <span className={`content-title ${blackOpsOne.className}`}>
                CONTACT
            </span>
            <p className="contact">{`
                If you have any interesting projects that you need a hand in 
                or if you just want to say hello, don't hesitate to reach out;
            `}</p>
            <form className="contact" action={formAction}>
                <div className="form-group">
                    <label htmlFor="username">Name:</label>
                    <input
                        id="username" name="username" type="text"
                        defaultValue={formState?.form_data?.get("username")}
                        placeholder="official name" required
                        className={`input ${cutiveMono.className}
                        ${formState?.errors?.username? "error-message":""}`}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email" name="email" type="email"
                        placeholder="jdoe@email.com" required
                        defaultValue={formState?.form_data?.get("email")}
                        className={`input ${cutiveMono.className}
                        ${formState?.errors?.email? "error-message":""}`}
                    />
                </div>
                <div className="form-group last-child">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message" name="message"
                        placeholder="Hello George,..." required
                        defaultValue={formState?.form_data?.get("message")}
                        className={`input ${cutiveMono.className}
                        ${formState?.errors?.message? "error-message":""}`}
                    ></textarea>
                </div>
                <input
                    type="submit"
                    disabled={pending}
                    value={pending?"Sending...":"Send Message"}
                    className={`button ${cutiveMono.className} ${pending? "disabled-button":""}`}
                />
                {message && 
                <div id="form-result" className={`${formState?.success?"success":"error"}-message`}>
                    {formState.message+(`${formState.success?" :)":";"}`)}
                    <ol>
                        {!formState.success && 
                            Object.entries(formState.errors)
                            .map(([field,errors])=>errors
                            .map(error=><li key={error}>{error}</li>))
                        }
                    </ol>
                </div>}
            </form>
        </div>
    );
}