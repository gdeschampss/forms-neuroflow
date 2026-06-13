import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const StepContact = ({ nextStep, prevStep, formData, updateFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      nextStep();
    }
  };

  return (
    <>
      <button className="back-btn" onClick={prevStep}>
        <FaArrowLeft /> Voltar
      </button>

      <h2 className="step-title">Excelente escolha!</h2>
      <p className="step-subtitle">Para personalizarmos seu atendimento, como podemos te chamar?</p>

      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="custom-input"
          placeholder="Digite seu nome ou da sua empresa"
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
          autoFocus
        />
        
        <button 
          type="submit" 
          className="action-btn" 
          disabled={!formData.name.trim()}
        >
          Continuar <FaArrowRight />
        </button>
      </form>
    </>
  );
};

export default StepContact;
