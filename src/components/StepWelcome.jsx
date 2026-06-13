import { FaCode, FaLayerGroup } from 'react-icons/fa';

const StepWelcome = ({ nextStep, updateFormData }) => {
  const handleSelect = (path) => {
    updateFormData('path', path);
    nextStep();
  };

  return (
    <>
      <h2 className="step-title">Bem-vindo à NeuroFlow!</h2>
      <p className="step-subtitle">O que podemos construir para o seu negócio hoje?</p>

      <div className="options-grid">
        <button className="option-btn" onClick={() => handleSelect('servicos')}>
          <div className="option-icon">
            <FaCode />
          </div>
          <div className="option-content">
            <span>Contratar Serviços Específicos</span>
            <span className="option-desc">Websites, CRM, IA ou Sistemas</span>
          </div>
        </button>

        <button className="option-btn" onClick={() => handleSelect('combos')}>
          <div className="option-icon">
            <FaLayerGroup />
          </div>
          <div className="option-content">
            <span>Combos de Alta Performance</span>
            <span className="option-desc">Pacotes completos para escalar</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default StepWelcome;
