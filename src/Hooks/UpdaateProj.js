import { Auth } from "../context/Auth"

export const UpdateProj = () => {
    const {GetAllProjects} = Auth()
    const UpdateProject = async(Id,Tabaruc) => {
        const updatenow = await fetch(`http://localhost:8880/Api/Update/${Id}`, {
            method: 'PATCH',
            body: JSON.stringify(Tabaruc),
            headers: {
            'Content-Type':'application/json',
            }
        })

        const res = await updatenow.json()
        GetAllProjects()
        // if(updatenow.ok){

        // }
    }


    return {UpdateProject}

}