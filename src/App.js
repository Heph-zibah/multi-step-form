import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import StepFive from "./components/StepFive";
import StepFour from "./components/StepFour";
import StepOne from "./components/StepOne";
import Steps from "./components/Steps";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";
import Error from './components/Error'

function App() {
  return (
    <div >
     <main className="container">
       <Steps/>
        <Routes>
          <Route path="/" element={<StepOne/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/steptwo" element={<StepTwo/>}/>
          <Route path="/stepthree" element={<StepThree/>}/>
          <Route path="/stepfour" element={<StepFour/>}/>
          <Route path="/stepfive" element={<StepFive/>}/>
        </Routes>
     </main>
      <footer>Challenge by <Link to="#">Frontend Mentor</Link>. Coded by <Link to="#">Oluwatosin A Daramola</Link>.</footer>
    </div>
  );
}

export default App;
