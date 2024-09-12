import Welcome from "./welcome";
import ShowCase from "./showcase";
import { fetchData } from "../lib/actions";

export default async function Content(){
    const
        details=await fetchData("details"),
        projects=await fetchData("projects"),
        experiences=await fetchData("experiences");

    return (
        <main id="main-content">
            <Welcome details={details}/>
            <ShowCase
                email={details.email}
                first_name={details.first_name}
                projects={projects}
                experiences={experiences}
            />
        </main>
    );
}