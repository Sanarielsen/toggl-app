import './index.css';
import { IWorkspace } from "../../pages/workspaces/workspaces"
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

function SingleWorkspace( {name, id} : IWorkspace )  {
  const navigate = useNavigate()

  const handleOnClick = (e: MouseEvent) => {
    e.preventDefault()
    localStorage.setItem("wid", id)
    navigate("/projects")
  }

    return (
      <>
        <div onClick={(evt) => handleOnClick(evt)} className="singleWorkspace py-5">

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
