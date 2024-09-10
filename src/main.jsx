import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <FormWithCustomHook/>

 </React.StrictMode>,
)
