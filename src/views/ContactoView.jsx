import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Modal from '../components/common/Modal';
import './ContactoView.css';

function ContactoView() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: 'Contacto general',
    asunto: '',
    mensaje: ''
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', isSuccess: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación adicional
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.telefono.trim() || 
        !formData.asunto.trim() || !formData.mensaje.trim()) {
      setModalContent({
        title: 'Error',
        message: 'Por favor, completá todos los campos obligatorios.'
      });
      setModalOpen(true);
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setModalContent({
        title: 'Error',
        message: 'Por favor, ingresá un email válido.'
      });
      setModalOpen(true);
      return;
    }

    // Preparar los datos para EmailJS
    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      phone: formData.telefono,
      subject: formData.asunto,
      motivo: formData.motivo,
      message: formData.mensaje,
      to_email: 'Drymatsoluciones@gmail.com'
    };

    try {
      // Enviar email usando EmailJS
      // IMPORTANTE: Reemplaza estos valores con tus credenciales de EmailJS:
      // 1. Crea cuenta en https://www.emailjs.com/
      // 2. Crea un servicio de email (Gmail, Outlook, etc.)
      // 3. Crea un template de email
      // 4. Reemplaza 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY'
      
      await emailjs.send(
        'YOUR_SERVICE_ID',      // Reemplazar con tu Service ID
        'YOUR_TEMPLATE_ID',     // Reemplazar con tu Template ID
        templateParams,
        'YOUR_PUBLIC_KEY'       // Reemplazar con tu Public Key
      );
      
      // Mostrar modal de éxito
      setModalContent({
        title: 'Éxito',
        message: 'Mensaje creado con éxito',
        isSuccess: true
      });
      setModalOpen(true);
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        motivo: 'Contacto general',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setModalContent({
        title: 'Error',
        message: 'Hubo un problema al enviar tu mensaje. Por favor, intentá nuevamente o contactanos directamente a Drymatsoluciones@gmail.com',
        isSuccess: false
      });
      setModalOpen(true);
    }
  };

  const handleWhatsAppClick = () => {
    // Número de WhatsApp de DryMat (cambiar por el número real)
    const phoneNumber = ''; // Agregar número aquí
    const message = encodeURIComponent('Hola, me gustaría contactar con DryMat');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="contacto-view">
      <Navbar />
      <div className="contacto-container">
        <h1>Contacto</h1>
        <p className="contacto-subtitle">
          ¿Tenés alguna consulta? Completá el formulario y nos pondremos en contacto con vos a la brevedad.
        </p>

        <form onSubmit={handleSubmit} className="contacto-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">
                Nombre <span className="required">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="motivo">
                Motivo de Contacto <span className="required">*</span>
              </label>
              <select
                id="motivo"
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
                required
              >
                <option value="Contacto general">Contacto general</option>
                <option value="Consulta comercial">Consulta comercial</option>
                <option value="Soporte técnico">Soporte técnico</option>
                <option value="Cotización">Cotización</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">
                Asunto <span className="required">*</span>
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefono">
                Teléfono <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="mensaje">
                Mensaje <span className="required">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>

      {/* Botón flotante de WhatsApp */}
      <button className="whatsapp-button" onClick={handleWhatsAppClick} aria-label="Contactar por WhatsApp">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.263-0.321-0.53c-1.331-2.197-2.039-4.722-2.039-7.32 0-7.51 6.123-13.633 13.633-13.633s13.633 6.123 13.633 13.633c0 7.51-6.123 13.633-13.633 13.633zM21.243 18.097c-0.235-0.117-1.393-0.688-1.609-0.766-0.216-0.078-0.373-0.117-0.53 0.117s-0.608 0.766-0.746 0.923c-0.137 0.157-0.275 0.176-0.51 0.059-1.305-0.651-2.162-1.163-3.023-2.635-0.228-0.392 0.228-0.364 0.651-1.213 0.071-0.157 0.036-0.295-0.020-0.413-0.055-0.117-0.53-1.275-0.725-1.745-0.19-0.456-0.383-0.394-0.53-0.402-0.137-0.007-0.295-0.007-0.452-0.007s-0.413 0.059-0.63 0.295c-0.216 0.235-0.825 0.805-0.825 1.963s0.845 2.276 0.963 2.434c0.117 0.157 1.656 2.53 4.014 3.548 1.473 0.638 2.057 0.764 2.795 0.646 0.451-0.071 1.393-0.569 1.589-1.119 0.196-0.55 0.196-1.021 0.137-1.119-0.059-0.098-0.216-0.157-0.452-0.275z"></path>
        </svg>
      </button>
      <Modal 
        isOpen={modalOpen} 
        onClose={() => {
          setModalOpen(false);
          if (modalContent.isSuccess) {
            navigate('/');
          }
        }}
        title={modalContent.title}
        message={modalContent.message}
      />
      <Footer />
    </div>
  );
}

export default ContactoView;