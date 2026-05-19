import Content from "./content/component";
import Overlay from "@lib/components/Overlay/component";
import { ReferenceProvider } from "@lib/context";
import Navigation from "./navigation/navbar";

export default function Root(){
    return(
        <ReferenceProvider>
            <Navigation/>
            <Content/>
            <Overlay/>
        </ReferenceProvider>
    );
}
