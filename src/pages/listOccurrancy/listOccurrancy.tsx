import {GroupDate} from "../../components/groupDate/groupDate"
import api from "../../api/api"
import './index.css'
import { useEffect, useState } from "react"
import axios from "axios"

export type IDate = {
  label: string;
  begin: string;
  end: string
}

function ListOccurrancy() {
  const [timeEntries, setTimeEntries] = useState<IDate[]>([])

    const body = {
      "beginDate": "01/07/2022",
      "endDate": "12/07/2022",
      "beginHour": "9",
      "endHour": "17"
  }

    const getTimeEntries = async () => {
      const { data } = await api.post('/toggl/days', body )
      setTimeEntries(data)
    }

    useEffect(() => {
      getTimeEntries()
    }, [])
  
    return (
      <div className="listOccurrancy bg-cyan-200">
        <div className="grid place-content-center h-screen w-screen">
          <div className="container shadow-md p-10">

            <label className="font-bold"> List of occurrancys: </label>

            <div className="occurrancyContext my-5 overflow-y-scroll">
              <>
                {timeEntries.map(timeEntry => {
                  return (
                    <div> <GroupDate label={timeEntry.label} begin={timeEntry.begin} end={timeEntry.end}/> </div>
                  )
                })}
              </>
            </div>

            <button className="p-2 w-full rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
                Continue
            </button>
          </div>
        </div>
      </div>
    )
  }

export default ListOccurrancy