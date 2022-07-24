import {GroupDate} from "../../components/groupDate/groupDate"
import './index.css'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export type IDate = {
  label: string;
  begin: string;
  end: string
}

function ListOccurrence() {
  const [timeEntries, setTimeEntries] = useState<IDate[]>([])
  const {state}: any = useLocation()
  let index = 0

  const addNewOccurrence = () => {
    const newIDate = { begin: new Date(), end: new Date()} as any as IDate
    setTimeEntries(timeEntries.concat(newIDate))
  }

  useEffect(() => {
      if (state) {
        setTimeEntries(state)
      }
    }, [])

  return (
    <div className="listOccurrence bg-cyan-100">
      <div className="grid place-content-center h-screen w-screen">
        <div className="container shadow-md p-10">
          <div className="flex justify-between">
            <label className="font-bold"> List of occurrences: </label>
            <button onClick={addNewOccurrence} className="p-2 rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
              New Occurrence</button>
          </div>

          <div className="occurrenceContext my-5 overflow-y-scroll">
              {timeEntries && timeEntries.map(timeEntry =>
                <GroupDate label={timeEntry.label} begin={timeEntry.begin} end={timeEntry.end} key={index++}/>
              )}
          </div>

          <button className="p-2 w-full rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
              Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListOccurrence
