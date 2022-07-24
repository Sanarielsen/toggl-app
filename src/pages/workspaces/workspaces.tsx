import {SingleWorkspace} from "../../components/singleWorkspace/singleWorkspace"
import { useEffect, useState } from "react"
import api from "../../api/api"
import './index.css'

export type IWorkspace = {
  id: string,
  name: string
}

function Workspaces() {
    const [workspaces, setWorkspaces] = useState<IWorkspace[]>([])

    const getWorkspaces = async () => {
      const token = localStorage.getItem("token")
      if (!token)
        return
      const tokenResponse = await api.post(`account/token/${token}`)
      if (tokenResponse.status != 201)
        return

      const {data} = await api.get('toggl/workspaces')
      setWorkspaces(data)
    }

    useEffect(() => {
      getWorkspaces()
    }, [])

    return (
      <div className="App bg-cyan-200">
        <div className="grid place-content-center h-screen w-screen overflow-y-scroll">

            <fieldset>

              <legend className="font-bold"> Select your workspace: </legend>
              {workspaces.map(entryData => {

                  return (

                    <SingleWorkspace key={entryData.id} name={entryData.name} id={entryData.id}/>
                  )
              })}

            </fieldset>
        </div>
      </div>
    )
  }

export default Workspaces
