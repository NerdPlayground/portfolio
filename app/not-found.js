import { blackOpsOne, courierPrime } from "./ui/fonts";

export default function NotFound(){
    return (
        <div className="error-container">
            <div className={`label ${blackOpsOne.className}`}>{`OOOPS!!!`}</div>
            <div className={`information ${courierPrime.className}`}>{`We couldn't find what you were looking for`}</div>
        </div>
    );
}