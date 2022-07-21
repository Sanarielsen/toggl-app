import {SingleWorkspace} from "../../components/singleWorkspace/singleWorkspace"
import './index.css'

function Workspaces() {
  
    return (
      <div className="App bg-cyan-200">
        <div className="grid place-content-center h-screen w-screen">
            
            <fieldset>

              <legend className="font-bold"> Select your workspace: </legend>

              <SingleWorkspace/>
              <SingleWorkspace/>
              <SingleWorkspace/>
              <SingleWorkspace/>
              <SingleWorkspace/>
              
            </fieldset>
        </div>
      </div>
    )
  }
  
  export default Workspaces