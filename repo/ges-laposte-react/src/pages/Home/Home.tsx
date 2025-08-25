import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    // Animation des éléments au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="main-container">
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-content">
          <h1 className="hero-title">Calculateur Bilan GES</h1>
          <p className="hero-subtitle">
            Estimez et pilotez les émissions carbone de votre entité La Poste
          </p>
          
          <div className="hero-intro">
            <p>
              <strong>La comptabilité carbone</strong> est une notion essentielle de la lutte contre le réchauffement climatique.
              Cet outil permet aux entités de La Poste d'estimer en autonomie les émissions carbone de leur périmètre, 
              d'identifier les différents postes d'émissions et de piloter une trajectoire de décarbonation locale. 
              Ce n'est pas un outil de reporting même s'il offre la possibilité de remonter de l'information. 
            </p>
            <p>
              L'utilisateur a la possibilité de décrire les activités de son entité au travers des catégories suivantes : 
              Bâtiments, Flotte en propre, Transport sous-traité, Déplacements domicile-travail, Déplacements professionnels, 
              Fréquentation [des clients et des collaborateurs], Alimentation, Achats, restauration et Déchets générés.
            </p>
            <p>
              Pour les données énergétiques liées à la consommation des bâtiments, celles-ci sont disponibles dans l'outil 
              du groupe SOBRE. Si vous ne pouvez accéder à un tel outil pour obtenir vos consommations énergétique vous pouvez 
              vous adresser (aux RET, ROET, Contrôleurs de gestion ou à la DEX) ou en consultant la présente base de donnée 
              non exhaustive. Une base de données de facteurs d'émissions est utilisée pour calculer les émissions présentées 
              sur la page Résultats.
            </p>
          </div>

          <div className="cta-container">
            <Link to="/outil" className="cta-button primary">
              🚀 Commencer l'évaluation
            </Link>
            <Link to="/apropos" className="cta-button secondary">
              📖 En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;