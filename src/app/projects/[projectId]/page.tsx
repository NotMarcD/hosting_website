import {notFound} from "next/navigation";


export default function ProjectList( {params}: {
        params: {projectId: string}
    } 
) 

{
    const currentProjects = ["gamba"];

    if (!currentProjects.includes(params.projectId)) {
        return notFound()
    }
    
    return (
    <>
        <h1>Specific Project Details about {params.projectId}</h1>
    </>
    )
}

