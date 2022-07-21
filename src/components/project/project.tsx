import {IProject} from '../../pages/projects/projects'
import './index.css'; 

function Project({name} : IProject) {

    return (
      <>
        <div className="Project border-solid border-4 rounded hover:border-double hover:text-cyan-500 border-cyan-500 p-5">

            <label> Project {name} </label>
        </div>
      </>
    )
  }

export {Project}