import ReactDOM from 'react-dom/client'
import React from 'react'
import ResultOperation from './pages/ResultOperation/resultOperation'
import ListOccurrence from './pages/listOccurrence/listOccurrence'
import Workspaces from './pages/workspaces/workspaces'
import Projects from './pages/projects/projects'
import Search from './pages/search/search'
import Token from './pages/token/token'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Token />} />
          <Route path="search" element={<Search />} />
          <Route path="occurrences" element={<ListOccurrence />} />
          <Route path="projects" element={<Projects />} />
          <Route path="workspaces" element={<Workspaces />} />
          <Route path="result" element={<ResultOperation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
