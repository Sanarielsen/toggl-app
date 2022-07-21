import './index.css';
import { IWorkspace } from "../../pages/workspaces/workspaces"

function SingleWorkspace( {name} : IWorkspace )  {
  
    return (
      <>
        <div className="singleWorkspace py-5">

            <form> 
                <label 
                  className="text-stone-900 hover:text-zinc-500 focus:outline-none focus:ring"
                  > Workspace: {name}
                </label>
            </form>
        </div>
      </>
    )
  }

export {SingleWorkspace}