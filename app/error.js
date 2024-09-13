"use client";
import { blackOpsOne, courierPrime } from "./ui/fonts";

export default function Error({ error, reset }){
    const
        custom_label="CUSTOM APPLICATION ERROR: ",
        message=error.message.startsWith(custom_label)?
            error.message.split(custom_label)[1]:"Something went wrong but we are working on it";
    
    return(
        <div className="error-container">
            <div className={`label ${blackOpsOne.className}`}>{`OOOH NO!!!`}</div>
            <div className={`information ${courierPrime.className}`}>{message}</div>
        </div>
    );
}