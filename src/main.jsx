import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CounterWithCustomHook/>
  </React.StrictMode>,
)
