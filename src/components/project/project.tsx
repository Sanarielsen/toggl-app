import { MouseEvent } from 'react';
import {IProject} from '../../pages/projects/projects'
import './index.css';
import { useNavigate } from 'react-router-dom';

function Project({name, id} : IProject) {
  const navigate = useNavigate()

  const handleOnClick = async (e: MouseEvent) => {
    e.preventDefault()
    localStorage.setItem("projectId", id)
    navigate("/search")
  }
    return (
      <>
        <div onClick={(evt) => handleOnClick(evt)} className="Project border-solid border-4 rounded hover:border-double hover:text-cyan-500 border-cyan-500 p-5">
            <label> Project {name} </label>
        </div>
      </>
    )
  }

export {Project}
