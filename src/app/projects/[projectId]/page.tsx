export default function ProductsList( {params}: {
    params: {projectId: string}
} ){
    return (
    <>
        <h1>Specific Project Details about {params.projectId}</h1>
    </>
    )
}