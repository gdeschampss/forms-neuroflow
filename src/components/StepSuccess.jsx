import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

const StepSuccess = ({ prevStep, formData }) => {
  const { name, selection } = formData;

  const generateWhatsAppLink = () => {
    const phoneNumber = '554796732918';
    const message = `Olá, equipe NeuroFlow! Meu nome é *${name}* e acabei de preencher o formulário no site. Tenho interesse em focar na seguinte solução: *${selection}*. Podemos conversar?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <>
      <button className="back-btn" onClick={prevStep}>
        <FaArrowLeft /> Voltar
      </button>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ 
          width: '80px', height: '80px', borderRadius: '50%', 
          background: 'rgba(37, 211, 102, 0.1)', display: 'flex', 
          justifyContent: 'center', alignItems: 'center', 
          margin: '0 auto 20px auto'
        }}>
          <FaWhatsapp size={40} color="#25D366" />
        </div>
      </div>

      <h2 className="step-title">Perfeito, {name}!</h2>
      <p className="step-subtitle">
        Sua seleção foi registrada. Clique no botão abaixo para enviar os detalhes diretamente para o nosso WhatsApp comercial e iniciar seu atendimento VIP.
      </p>

      <a 
        href={generateWhatsAppLink()} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }}
      >
        <button className="action-btn whatsapp">
          <FaWhatsapp size={24} />
          Enviar para o WhatsApp
        </button>
      </a>
      
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '15px' }}>
        Redirecionamento seguro para o WhatsApp oficial da NeuroFlow.
      </p>
    </>
  );
};

export default StepSuccess;
