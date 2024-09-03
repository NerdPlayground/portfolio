import { Content } from "@/app/content/main-content";
import { Navbar, Navpane } from "@/app/navigation/navbar";

export default function Root(){
    return(
        <>
            <Navpane/>
            <Navbar/>
            <Content/>
        </>
    );
}