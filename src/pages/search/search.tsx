import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api'
import './index.css'

function Search() {
  const [beginDate, setBeginDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")
  const [beginHour, setBeginHour] = useState<string>("")
  const [endHour, setEndHour] = useState<string>("")

  const navigator = useNavigate()
  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault()
    if (!beginDate || !endDate || !beginHour || !endHour) return

    const {data} = await api.post("toggl/days", {
      beginDate,
      endDate,
      beginHour,
      endHour
    })

    navigator("/occurrences",{state:  data })

  }

    return (
      <div className="ResultOperation bg-cyan-100">
        <div className="grid place-content-center h-screen w-screen">

          <label className="text-sm font-medium text-slate-700"> Search occurrences: </label>

          <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-5 my-5">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Start Date
              </span>
              <input onChange={({target}) => setBeginDate(target.value)}
              type="date" name="txtDateStart" id="txtDateStart" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
            </label>

            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Final Date
              </span>
              <input onChange={({ target }) => setEndDate(target.value)}
              type="date" name="txtDateFinal" id="txtDateFinal" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
            </label>

            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Start Hour
              </span>
              <input onChange={({ target }) => setBeginHour(target.value)}
              type="time" name="txtHourStart" id="txtHourStart" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
            </label>

            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                End Hour
              </span>
              <input onChange={({ target }) => setEndHour(target.value)}
              type="time" name="txtHourStart" id="txtHourStart" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
            </label>
          </div>

          <button onClick={(e) => handleSubmit(e)}
          className="p-2 w-full rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
                Continue
          </button>
        </div>
      </div>
    )
  }

export default Search
