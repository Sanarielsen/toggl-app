import { useEffect } from 'react'
import './index.css'

function ResultOperation() {
    useEffect(() => {
      const token = localStorage.getItem("token")
      localStorage.clear()
      if (token)
        localStorage.setItem("token", token)
    })
    return (
      <div className="ResultOperation bg-cyan-100">
        <div className="grid place-content-center h-screen w-screen">

            RESULT OPERATION
        </div>
      </div>
    )
  }

export default ResultOperation
