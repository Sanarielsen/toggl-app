import ListOccurrancy from './pages/listOccurrancy/listOccurrancy'
import Workspaces from './pages/workspaces/workspaces'
import Projects from './pages/projects/projects'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>
)
