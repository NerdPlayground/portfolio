import Content from "./content/component";
import Overlay from "@lib/components/Overlay/component";
import { ReferenceProvider } from "@lib/context";
import Navigation from "./navigation/navbar";
import { cookies } from "next/headers";
import { decrypt } from "@lib/components/auth/actions";

export default async function Root(){
    const auth=await decrypt((await cookies())
        .get(process.env.COOKIE_AUTH)?.value
    );
    return(
        <ReferenceProvider initial={{token:auth?.token}}>
            <Navigation/>
            <Content/>
            <Overlay/>
        </ReferenceProvider>
    );
}
