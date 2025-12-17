import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-view">
      <Navbar />
      <main className="home-content">
        <section className="hero-section">
          <h1>Bienvenido a DryMat</h1>
          <p>Tu solución profesional</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeView;