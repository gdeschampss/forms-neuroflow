import { useState } from 'react';
import FunnelContainer from './components/FunnelContainer';
import StepWelcome from './components/StepWelcome';
import StepSelection from './components/StepSelection';
import StepContact from './components/StepContact';
import StepSuccess from './components/StepSuccess';
import { BackgroundLines } from './components/ui/animated-svg-background';
import './index.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    path: '', // 'servicos' or 'combos'
    selection: '',
    name: ''
  });
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const totalSteps = 4;

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepWelcome nextStep={nextStep} updateFormData={updateFormData} />;
      case 2:
        return <StepSelection nextStep={nextStep} prevStep={prevStep} formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <StepContact nextStep={nextStep} prevStep={prevStep} formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <StepSuccess prevStep={prevStep} formData={formData} />;
      default:
        return <StepWelcome nextStep={nextStep} updateFormData={updateFormData} />;
    }
  };

  return (
    <BackgroundLines>
      <div className="app-wrapper">
        <FunnelContainer step={step} totalSteps={totalSteps} direction={direction}>
          {renderStep()}
        </FunnelContainer>
      </div>
    </BackgroundLines>
  );
}

export default App;
