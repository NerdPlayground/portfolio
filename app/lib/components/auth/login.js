import styles from "./styles.module.scss";
import { loginAccount } from "@lib/actions";
import { blackOpsOne, cutiveMono } from "@ui/fonts";
import { useActionState, useContext, useEffect, useRef, useState } from "react";
import { Reference } from "@lib/context";
import { blurBackground } from "@lib/functions";

export default function Login(){
    const login_prompt=useRef();
    const [message,setMessage]=useState(false);
    const [formState,formAction,pending]=useActionState(loginAccount,null);
    
    const { addRef, refs }=useContext(Reference);
    useEffect(()=>{addRef({login_prompt:login_prompt.current.style})},[addRef]);

    useEffect(()=>{
        setMessage(!!formState);
        if(formState?.success) setTimeout(()=>setMessage(false),15000);
    },[formState]);

    function closeLoginPrompt(){
        refs.portal.visibility="hidden";
        refs.login_prompt.visibility="hidden";
        blurBackground(refs,false);
    }

    return(
        <div className={`${styles.login} ${cutiveMono.className}`} ref={login_prompt}>
            <span className={blackOpsOne.className}>{`
                Login Account
            `}</span>
            <p>{`
                Welcome back to your Portfolio :) Login to your account to
                turn on the Portfolio Manager so that you can make changes to
                your Portfolio.
            `}</p>
            <form action={formAction}>
                <div className={`form-group ${styles.fg_login}`}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username" name="username" type="text"
                        defaultValue={formState?.form_data?.get("username")}
                        placeholder="jdoeaccnt"
                        className={`input ${cutiveMono.className}
                        ${formState?.errors?.username? "error-message":""}`}
                    />
                </div>
                <div className={`form-group ${styles.fg_login}`}>
                    <label htmlFor="username">Password:</label>
                    <input
                        id="password" name="password" type="password"
                        defaultValue={formState?.form_data?.get("password")}
                        placeholder="v3r£5Tr0NP@$$"
                        className={`input ${cutiveMono.className}
                        ${formState?.errors?.username? "error-message":""}`}
                    />
                </div>
                <div className={`form_buttons ${styles.fb_login}`}>
                    <input
                        type="submit"
                        disabled={pending}
                        value={pending?"Authenticating...":"Login"}
                        className={`button submit-button ${cutiveMono.className} ${pending? "disabled-button":""}`}
                    />
                    <button 
                        onClick={closeLoginPrompt}
                        className={`button submit-button ${cutiveMono.className}`} 
                    >{`
                        Cancel
                    `}</button>
                </div>
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
