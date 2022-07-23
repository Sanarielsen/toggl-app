import {Link} from 'react-router-dom'
import './token.css'

function Token() {
  
    return (
      <div className="App bg-cyan-200">
        <div className="grid place-content-center h-screen w-screen">
            <div className="container shadow-md p-10">
              <form>
                <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"> API Token
                  <input type="text" name="txtAPIToken" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </span>
                <button className="p-2 w-full rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
                    Connection
                </button>
              </form>
            </div>
        </div>
      </div>
    )
  }

export default Token