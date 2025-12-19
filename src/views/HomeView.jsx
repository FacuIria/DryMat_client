import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './HomeView.css';
import sanAndresImg from '../assets/banioUdesa.jpeg';

const HomeView = () => {
  return (
    <div className="home-view">
      <Navbar />
      <main className="home-content">
        <section className="hero-section">
          <h1>Bienvenido a DryMat</h1>
          <p>Innovación en alfombras de goma para mingitorios</p>
        </section>

        <section className="intro-section">
          <h2>¿Quiénes Somos?</h2>
          <p>
            En DryMat, somos especialistas en alfombras de goma de alta calidad para mingitorios. 
            Nuestro producto estrella, <strong>Pishing Mat</strong>, está diseñado para espacios de alto tráfico 
            como aeropuertos, universidades, centros comerciales y empresas.
          </p>
        </section>

        <section className="diferenciador-section">
          <h2>¿Qué nos hace únicos?</h2>
          <div className="diferenciador-content">
            <div className="diferenciador-item">
              <h3>Arco y Pelota Incluidos</h3>
              <p>
                Nuestras <strong>Pishing Mat</strong> vienen con un arco y una pelota integrados, creando una 
                experiencia interactiva y divertida que cambia completamente la dinámica del baño.
              </p>
            </div>
            <div className="diferenciador-item">
              <h3>Máxima Durabilidad</h3>
              <p>
                Fabricadas con goma de primera calidad, resistentes al uso intensivo y 
                diseñadas para durar años en condiciones exigentes.
              </p>
            </div>
            <div className="diferenciador-item">
              <h3>Fácil Limpieza</h3>
              <p>
                Material antideslizante e higiénico, fácil de limpiar y mantener. 
                Ideal para espacios que requieren alta higiene.
              </p>
            </div>
          </div>
        </section>

        <section className="clientes-section">
          <h2>Nuestros Clientes Destacados</h2>
          <p>Confiaron en nosotros instituciones y espacios de alto prestigio</p>
          <div className="clientes-grid">
            <div className="cliente-item">
              <img src={sanAndresImg} alt="Universidad de San Andrés" />
              <h3>Universidad de San Andrés</h3>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </section>

        <section className="objetivo-section">
          <h2>Nuestro Objetivo</h2>
          <p>
            En DryMat, nuestro objetivo es transformar los espacios sanitarios en 
            lugares más higiénicos, funcionales y entretenidos. Buscamos combinar funcionalidad 
            con innovación, ofreciendo productos que no solo cumplen su propósito práctico, 
            sino que también generan una experiencia positiva y memorable.
          </p>
          <p>
            Creemos que hasta el detalle más pequeño puede marcar la diferencia en la calidad 
            de un espacio, y es por eso que nos esforzamos por ofrecer soluciones que superen 
            las expectativas de nuestros clientes.
          </p>
        </section>

        <section className="contacto-cta">
          <h2>¿Listo para innovar tu espacio?</h2>
          <p>Contactanos hoy y descubrí cómo DryMat puede transformar tus baños</p>
          <Link to="/contacto" className="btn-contacto">Contactar</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeView;