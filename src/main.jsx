import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {MemoHook} from "./06-memos/MemoHook.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MemoHook/>
 </React.StrictMode>,
)
