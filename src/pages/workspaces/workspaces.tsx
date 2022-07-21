import {SingleWorkspace} from "../../components/singleWorkspace/singleWorkspace"
import { useEffect, useState } from "react"
import api from "../../api/api"
import './index.css'

export type IWorkspace = {

  name: string
}

function Workspaces() {

    const [paramsEntries, setParamsEntries] = useState<IWorkspace[]>([])

    const getParamsEntries = async () => {
      const { data } = await api.get('toggl/workspaces')
      setParamsEntries(data)
    }

    useEffect(() => {
      getParamsEntries()
    }, [])

    return (
      <div className="App bg-cyan-200">
        <div className="grid place-content-center h-screen w-screen overflow-y-scroll">
            
            <fieldset>

              <legend className="font-bold"> Select your workspace: </legend>
              {paramsEntries.map(entryData => {

                  return (

                    <SingleWorkspace name={entryData.name}/>
                  )
              })}
              
            </fieldset>
        </div>
      </div>
    )
  }
  
export default Workspaces