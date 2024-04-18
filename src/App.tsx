import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';;
import { TopBar }  from "./components/TopBar" 
import CreateForm from './screens/Create';
function App() {
  return (
    <div className='h-screen bg-slate-950'>
      <TopBar/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/game" element={<Game />} /> 
     

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
