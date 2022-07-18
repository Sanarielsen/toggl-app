import './index.css'; 
import { IDate } from "../../pages/listOccurrancy/listOccurrancy"


function GroupDate( {label, begin, end}: IDate ) {
  
    return (
      <>
        <div className="groupDate">

          <div className="currentDate p-10"> 

            <fieldset>

              <legend> {label} </legend>

              <div className="grid grid-cols-2 gap-2"> 

                <div className="slot-1">

                  <label> Initial:
                    <input type="text" 
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                      size={50} 
                      name="txtDateInitial" 
                      id="txtDateInitial" 
                      value={begin} />
                  </label>
                </div>

                <div className="slot-2">

                  <label> Final:
                    <input type="text" 
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                      size={50} 
                      name="txtDateFinal" 
                      id="txtDateFinal" 
                      value={end} 
                    />
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </>
    )
  }

export {GroupDate}