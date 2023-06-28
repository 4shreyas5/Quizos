import React from "react";
import QuizApp from './components/QuizApp';
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/quiz' element={<QuizApp/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    )
}
export default App