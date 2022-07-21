import {Project} from '../../components/project/project'
import { useEffect, useState } from "react"
import api from "../../api/api"
import './index.css'

//<div className='grid gap-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
export type IProject = {

    name: string
}

function Projects() {

  const body = {
    "wid": 6117445
  }

  const [paramsEntries, setParamsEntries] = useState<IProject[]>([])

  const getParamsEntries = async () => {

    const { data } = await api.post('toggl/projects', body)
    setParamsEntries(data)
  }

  useEffect(() => {
    getParamsEntries()
  }, [])
  
    return (
      <div className="Projects bg-cyan-100">
        <div className="grid place-content-center h-screen w-screen">
            
          <fieldset>
            <legend className='font-bold'> Select project: </legend>

              <div className='projectsContext grid mt-5 overflow-y-scroll justify-items-center auto-rows-max auto-cols-max xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {paramsEntries.map( entryData => {

                  return (

                    <Project name={entryData.name} />
                  )
                })}
              </div>
            
            <div className="mt-5 mb-2"> <label htmlFor="txaDescription"> Add descriptions to your time entries: </label> </div>
            <textarea className="mb-5" id="txaDescription" name="txaDescription"
                      rows={5} cols={50}>
            </textarea>
            
            <button className="p-2 w-full rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
                Send
            </button>
          </fieldset>
        </div>
      </div>
    )
  }
  
  export default Projects