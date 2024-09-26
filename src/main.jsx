import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import UseEffect from './UseEffect.jsx'
import Rendering from './Rendering.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseEffect/> */}
    <Rendering />
  </StrictMode>,
)
