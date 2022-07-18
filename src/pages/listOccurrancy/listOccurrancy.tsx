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
      "beginning": "9",
      "end": "17",
      "dates": [
          "2022-07-01T03:00:00.000Z",
          "2022-07-04T03:00:00.000Z",
          "2022-07-05T03:00:00.000Z",
          "2022-07-06T03:00:00.000Z",
          "2022-07-07T03:00:00.000Z",
          "2022-07-08T03:00:00.000Z",
          "2022-07-11T03:00:00.000Z",
          "2022-07-12T03:00:00.000Z",
          "2022-07-13T03:00:00.000Z",
          "2022-07-14T03:00:00.000Z",
          "2022-07-15T03:00:00.000Z",
          "2022-07-18T03:00:00.000Z"
      ]
    }

    const getTimeEntries = async () => {
      const { data } = await api.get('/toggl/time-entries', { data: body })
      setTimeEntries(data)
    }

    useEffect(() => {
      getTimeEntries()
    }, [])
  
    return (
      <div className="listOccurrancy bg-cyan-200">
        <div className="grid place-content-center h-screen w-screen">
          <div className="container shadow-md p-10">
            <>
              {timeEntries.forEach(timeEntry => {
                return(
                  <div> <GroupDate label={timeEntry.label} begin={timeEntry.begin} end={timeEntry.end}/> </div>
                )
              })}
            </>

            <button className="p-2 w-full rounded text-zinc-50 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300">
                Continue
            </button>
          </div>
        </div>
      </div>
    )
  }

export default ListOccurrancy