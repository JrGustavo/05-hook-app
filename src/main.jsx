import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <MultipleCustomHooks/>

 </React.StrictMode>,
)
