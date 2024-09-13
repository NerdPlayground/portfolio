"use client";
import { blackOpsOne, courierPrime } from "./ui/fonts";

export default function Error({ error, reset }){
    return(
        <div className="error-container">
            <div className={`label ${blackOpsOne.className}`}>{`OOOH NO!!!`}</div>
            <div className={`information ${courierPrime.className}`}>{error.message}</div>
        </div>
    );
}