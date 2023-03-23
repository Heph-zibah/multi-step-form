import React from "react";
import { Route, Routes } from "react-router-dom";
import StepFive from "./components/StepFive";
import StepFour from "./components/StepFour";
import StepOne from "./components/StepOne";
import Steps from "./components/Steps";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";
import Error from './components/Error'

function App() {
  return (
    <div className="">
      <Steps/>
      <Routes>
        <Route path="/" element={<StepOne/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/steptwo" element={<StepTwo/>}/>
        <Route path="/stepthree" element={<StepThree/>}/>
        <Route path="/stepfour" element={<StepFour/>}/>
        <Route path="/stepfive" element={<StepFive/>}/>
      </Routes>
      <footer>Challenge by <a href="#">Frontend Mentor</a>. Coded by <a href="#">Oluwatosin A Daramola</a>.</footer>
    </div>
  );
}

export default App;
