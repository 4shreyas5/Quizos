import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizSelection from "./components/QuizSelection";
import QuizApp1 from "./components/QuizApp1";
import QuizApp2 from "./components/QuizApp2";
import QuizApp3 from "./components/QuizApp3";
import QuizApp4 from "./components/QuizApp4";
import QuizApp5 from "./components/QuizApp5";
import QuizApp6 from "./components/QuizApp6";
import QuizApp7 from "./components/QuizApp7";
import QuizApp8 from "./components/QuizApp8";
import QuizApp9 from "./components/QuizApp9";
import QuizApp10 from "./components/QuizApp10";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizSelection />} />
          <Route path="/quizapp1" element={<QuizApp1 />} />
          <Route path="/quizapp2" element={<QuizApp2 />} />
          <Route path="/quizapp3" element={<QuizApp3 />} />
          <Route path="/quizapp4" element={<QuizApp4 />} />
          <Route path="/quizapp5" element={<QuizApp5 />} />
          <Route path="/quizapp6" element={<QuizApp6 />} />
          <Route path="/quizapp7" element={<QuizApp7 />} />
          <Route path="/quizapp8" element={<QuizApp8 />} />
          <Route path="/quizapp9" element={<QuizApp9 />} />
          <Route path="/quizapp10" element={<QuizApp10 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
