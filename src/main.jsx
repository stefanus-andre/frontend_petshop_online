import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import Routing from "./routes/Routing.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>,
)
