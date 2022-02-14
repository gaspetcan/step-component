import React, {useState} from "react";
import Steps from "./steps";
import StepsMock from "./steps-mock.json";

const App = () =>  {
  const [activeStep, setActiveStep] = useState(null); 

  return (
    <Steps steps={StepsMock} 
          current={activeStep} 
          setCurrent={setActiveStep}/>
  );
}

export default App;

