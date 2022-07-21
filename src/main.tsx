import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ListOccurrancy from './pages/listOccurrancy/listOccurrancy'
import Workspaces from './pages/workspaces/workspaces'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ListOccurrancy />
  </React.StrictMode>
)
