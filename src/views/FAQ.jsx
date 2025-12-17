import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es DryMat?",
      answer: "DryMat es una empresa dedicada a proporcionar soluciones profesionales."
    },
    {
      question: "¿Cómo puedo contactarlos?",
      answer: "Puedes contactarnos a través de nuestro email contacto@drymat.com.ar o por teléfono."
    },
    {
      question: "¿Dónde están ubicados?",
      answer: "Nos encontramos en Buenos Aires, Argentina."
    }
  ];

  return (
    <div className="faq-view">
      <Navbar />
      <main className="faq-content">
        <h1>Preguntas Frecuentes</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;