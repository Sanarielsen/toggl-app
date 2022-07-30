import {useNavigate} from 'react-router-dom'
import './token.css'
import api from '../../api/api'
import { useState } from 'react'

function Token() {
  const [token, setToken]= useState<string | null>(localStorage.getItem('token'))
  const navigate = useNavigate()

  const handleSubmit = async (e: any ,token?: string | null) => {
    e.preventDefault()
    if (!token)
    return

    try {
      const response = await api.post(`account/token/${token}`)
      if (response.status != 201)
      return

      localStorage.setItem('token', token)
      navigate("/workspaces")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App bg-cyan-200">
      <div className="grid place-content-center h-screen w-screen">
          <div className="container shadow-md p-10">
            <form>
              <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"> API Token
                <input onChange={({target}) => setToken(target.value)} type="text" name="txtAPIToken" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
              </span>
              <button onClick={(evt) => handleSubmit(evt, token)} className="p-2 w-full rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
                  Set Token
              </button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Token
