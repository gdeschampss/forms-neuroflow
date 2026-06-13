import { FaGlobe, FaCogs, FaRobot, FaBullhorn, FaArrowLeft, FaCheckCircle, FaStar, FaCode } from 'react-icons/fa';

const servicosOptions = [
  { id: 'website', label: 'Websites de Alta Conversão', icon: <FaGlobe />, desc: 'Landing pages e sites institucionais' },
  { id: 'crm', label: 'CRM Completo + Treinamento', icon: <FaCogs />, desc: 'Gestão de leads e automações de vendas' },
  { id: 'sistemas', label: 'Sistemas Personalizados', icon: <FaCode />, desc: 'Soluções sob medida para seu negócio' },
  { id: 'ia', label: 'Agente de IA (24h)', icon: <FaRobot />, desc: 'Atendimento inteligente e suporte' },
  { id: 'midia', label: 'Gestão de Mídia', icon: <FaBullhorn />, desc: 'Tráfego pago e posicionamento digital' }
];

const combosOptions = [
  { id: 'combo-crm-ia', label: 'CRM + Agente IA', icon: <FaRobot />, desc: 'Venda e atenda no automático' },
  { id: 'combo-crm-automacoes', label: 'CRM + Automações', icon: <FaCogs />, desc: 'Escala para operações complexas' },
  { id: 'combo-web-ia', label: 'Website + Agente de IA', icon: <FaGlobe />, desc: 'Capture e atenda leads 24/7' },
  { id: 'combo-completo', label: 'Serviço Completo (Tudo Incluso)', icon: <FaStar />, desc: 'O ecossistema digital definitivo' }
];

const StepSelection = ({ nextStep, prevStep, formData, updateFormData }) => {
  const isServicos = formData.path === 'servicos';
  const options = isServicos ? servicosOptions : combosOptions;

  const handleSelect = (selection) => {
    updateFormData('selection', selection);
    nextStep();
  };

  return (
    <>
      <button className="back-btn" onClick={prevStep}>
        <FaArrowLeft /> Voltar
      </button>

      <h2 className="step-title">
        {isServicos ? 'Qual serviço você precisa?' : 'Escolha o combo ideal'}
      </h2>
      <p className="step-subtitle">
        Selecione a opção que melhor se alinha aos seus objetivos.
      </p>

      <div className="options-grid" style={{ overflowY: 'auto', maxHeight: '50vh', paddingRight: '5px' }}>
        {options.map((opt) => (
          <button key={opt.id} className="option-btn" onClick={() => handleSelect(opt.label)}>
            <div className="option-icon">
              {opt.icon}
            </div>
            <div className="option-content">
              <span>{opt.label}</span>
              <span className="option-desc">{opt.desc}</span>
            </div>
            <FaCheckCircle style={{ opacity: 0.2 }} />
          </button>
        ))}
      </div>
    </>
  );
};

export default StepSelection;
