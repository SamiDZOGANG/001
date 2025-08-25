import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <main className="main-container about-page">
      <div className="section">
        <h1>À propos du Calculateur Bilan GES</h1>
        
        <div className="about-content">
          <section className="about-section">
            <h2>Notre engagement</h2>
            <p>
              La Poste s'engage résolument dans la lutte contre le changement climatique. 
              Ce calculateur de bilan des émissions de gaz à effet de serre (GES) est un outil 
              essentiel pour accompagner toutes les entités du groupe dans leur démarche de 
              décarbonation.
            </p>
          </section>

          <section className="about-section">
            <h2>Objectifs de l'outil</h2>
            <ul>
              <li>Permettre une évaluation autonome et précise des émissions carbone</li>
              <li>Identifier les principaux postes d'émissions de votre entité</li>
              <li>Proposer des recommandations personnalisées pour réduire votre empreinte</li>
              <li>Suivre l'évolution de vos émissions dans le temps</li>
              <li>Contribuer à l'objectif de neutralité carbone du groupe</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Méthodologie</h2>
            <p>
              Notre calculateur s'appuie sur la méthodologie du GHG Protocol, référence 
              internationale en matière de comptabilité carbone. Les facteurs d'émission 
              utilisés proviennent de la Base Carbone® de l'ADEME et sont régulièrement 
              mis à jour.
            </p>
            
            <div className="methodology-grid">
              <div className="methodology-card">
                <h3>Scope 1</h3>
                <p>Émissions directes des sources détenues ou contrôlées</p>
              </div>
              <div className="methodology-card">
                <h3>Scope 2</h3>
                <p>Émissions indirectes liées à l'énergie achetée</p>
              </div>
              <div className="methodology-card">
                <h3>Scope 3</h3>
                <p>Autres émissions indirectes de la chaîne de valeur</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Comment utiliser l'outil ?</h2>
            <ol className="steps-list">
              <li>
                <strong>Sélectionnez les catégories</strong> pertinentes pour votre entité
              </li>
              <li>
                <strong>Renseignez les données</strong> de consommation et d'activité
              </li>
              <li>
                <strong>Consultez les résultats</strong> et identifiez vos principaux postes d'émissions
              </li>
              <li>
                <strong>Suivez les recommandations</strong> pour réduire votre impact
              </li>
              <li>
                <strong>Exportez votre bilan</strong> pour le partager et le suivre dans le temps
              </li>
            </ol>
          </section>

          <section className="about-section">
            <h2>Support et assistance</h2>
            <p>
              Pour toute question sur l'utilisation de l'outil ou l'interprétation des résultats, 
              n'hésitez pas à contacter :
            </p>
            <div className="contact-info">
              <p><strong>Support technique :</strong> support-ges@laposte.fr</p>
              <p><strong>Questions méthodologiques :</strong> expertise-carbone@laposte.fr</p>
              <p><strong>Documentation :</strong> Disponible dans l'espace intranet GES</p>
            </div>
          </section>

          <section className="about-section">
            <h2>Évolutions à venir</h2>
            <ul>
              <li>Intégration automatique des données depuis SOBRE</li>
              <li>Comparaison avec d'autres entités similaires</li>
              <li>Simulation de scénarios de réduction</li>
              <li>Tableau de bord de suivi pluriannuel</li>
              <li>Module de formation intégré</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;