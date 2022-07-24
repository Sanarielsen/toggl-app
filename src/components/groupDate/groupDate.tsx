import './index.css';
import { IDate } from "../../pages/listOccurrence/listOccurrence"

function GroupDate( {label, begin, end}: IDate ) {

  const beginDate = new Date(begin).toLocaleString();
  const endDate = new Date(end).toLocaleString();

  return (
    <div className="groupDate">

      <div className="currentDate p-10">

        <fieldset className='border-2 border-sky-600 hover:border-sky-900 rounded p-5'>

          <legend className="mb-5 font-bold"> Data: {label} </legend>

          <div className="grid gap-2 lg:grid-cols-2 sm:grid-cols-1">

            <div className="slot-1">

              <label> Initial:
                <input type="text"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  size={50}
                  name="txtDateInitial"
                  id="txtDateInitial"
                  defaultValue={beginDate}
                />
              </label>
            </div>

            <div className="slot-2">

              <label> Final:
                <input type="text"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  size={50}
                  name="txtDateFinal"
                  id="txtDateFinal"
                  defaultValue={endDate}
                />
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export {GroupDate}
