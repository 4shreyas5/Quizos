import React from "react";
import QuizApp from './components/QuizApp';
import Login from "./components/Login";
import Certificate from "./components/certificate";
import CertificateNFT from "./components/certificateNFT";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/home' element={<Login/>} ></Route>
            <Route path='/quiz' element={<QuizApp/>}></Route>
            <Route path='/certificate' element={<Certificate/>}></Route>
            <Route path='/certificateNFT' element={<CertificateNFT/>}></Route>


        </Routes>
        </BrowserRouter>
    </div>
    )
}
export default App