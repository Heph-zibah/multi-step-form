import React from "react";
import StepFive from "./components/StepFive";
import StepFour from "./components/StepFour";
import StepOne from "./components/StepOne";
import Steps from "./components/Steps";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";

function App() {
  return (
    <div className="">
      <Steps/>
      <StepOne/>
      <StepTwo/>
      <StepThree/>
      <StepFour/>
      <StepFive/>
      <footer>Challenge by <a href="#">Frontend Mentor</a>. Coded by <a href="#">Oluwatosin A Daramola</a>.</footer>
    </div>
  );
}

export default App;
