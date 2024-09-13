import Image from "next/image";

export function PortfolioPreview(){
    return (
        <Image
            fill={true} alt="Open Graph Image"
            src={"/opengraph/developer-activity-amico.svg"}
        />
    )
}