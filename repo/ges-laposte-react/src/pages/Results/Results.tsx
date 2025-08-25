import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import './Results.css';

interface EmissionData {
  category: string;
  value: number;
  percentage: number;
  scope: 1 | 2 | 3;
}

const Results: React.FC = () => {
  const { state } = useAppContext();
  const [emissions, setEmissions] = useState<EmissionData[]>([]);
  const [totalEmissions, setTotalEmissions] = useState(0);

  useEffect(() => {
    calculateEmissions();
  }, [state.forms.formData]);

  const calculateEmissions = () => {
    // Calcul simplifié des émissions par catégorie
    const emissionFactors = {
      batiments: { electricity: 0.0571, gas: 0.227, fuel: 2.68 },
      'flotte-propre': { essence: 2.28, diesel: 2.51, gnv: 2.16 },
      'transport-sous-traite': { distance: 0.15 },
      'deplacements-domicile': { avg_distance: 0.12 },
      'deplacements-professionnels': { train: 0.014, plane: 0.285, car: 0.193 },
      frequentation: { visitors: 0.05 },
      alimentation: { meals: 3.5 },
      achats: { paper: 1.84, it_equipment: 0.4 },
      dechets: { recyclable: 0.021, non_recyclable: 0.467 }
    };

    const calculatedEmissions: EmissionData[] = [];
    let total = 0;

    Object.entries(state.forms.formData).forEach(([category, data]) => {
      let categoryEmissions = 0;
      const factors = emissionFactors[category as keyof typeof emissionFactors];
      
      if (factors && data) {
        Object.entries(data).forEach(([key, value]) => {
          if (factors[key as keyof typeof factors] && typeof value === 'number') {
            categoryEmissions += value * factors[key as keyof typeof factors];
          }
        });
      }

      if (categoryEmissions > 0) {
        calculatedEmissions.push({
          category,
          value: categoryEmissions / 1000, // Conversion en tCO2e
          percentage: 0,
          scope: getScope(category)
        });
        total += categoryEmissions / 1000;
      }
    });

    // Calculer les pourcentages
    calculatedEmissions.forEach(emission => {
      emission.percentage = total > 0 ? (emission.value / total) * 100 : 0;
    });

    setEmissions(calculatedEmissions);
    setTotalEmissions(total);
  };

  const getScope = (category: string): 1 | 2 | 3 => {
    const scopeMapping: Record<string, 1 | 2 | 3> = {
      'flotte-propre': 1,
      batiments: 2,
      'transport-sous-traite': 3,
      'deplacements-domicile': 3,
      'deplacements-professionnels': 3,
      frequentation: 3,
      alimentation: 3,
      achats: 3,
      dechets: 3
    };
    return scopeMapping[category] || 3;
  };

  const getCategoryName = (category: string): string => {
    const names: Record<string, string> = {
      batiments: 'Bâtiments',
      'flotte-propre': 'Flotte en propre',
      'transport-sous-traite': 'Transport sous-traité',
      'deplacements-domicile': 'Déplacements domicile-travail',
      'deplacements-professionnels': 'Déplacements professionnels',
      frequentation: 'Fréquentation',
      alimentation: 'Alimentation',
      achats: 'Achats',
      dechets: 'Déchets'
    };
    return names[category] || category;
  };

  const getRecommendations = () => {
    const recommendations = [];
    
    if (emissions.find(e => e.category === 'batiments' && e.percentage > 30)) {
      recommendations.push({
        priority: 'high',
        title: 'Optimiser la consommation énergétique',
        description: 'Vos bâtiments représentent une part importante de vos émissions. Envisagez une rénovation énergétique.',
        impact: '-30%'
      });
    }

    if (emissions.find(e => e.category === 'flotte-propre' && e.value > 10)) {
      recommendations.push({
        priority: 'medium',
        title: 'Électrifier la flotte',
        description: 'La transition vers des véhicules électriques pourrait réduire significativement vos émissions.',
        impact: '-40%'
      });
    }

    recommendations.push({
      priority: 'low',
      title: 'Sensibiliser les collaborateurs',
      description: 'Mettre en place des formations sur les éco-gestes au quotidien.',
      impact: '-5%'
    });

    return recommendations;
  };

  return (
    <main className="main-container results-page">
      <section className="results-section">
        <div className="results-header">
          <h1 className="results-title">Bilan des émissions GES</h1>
          <p className="results-subtitle">Analyse détaillée de votre empreinte carbone</p>
        </div>

        {/* Vue d'ensemble */}
        <div className="overview-grid">
          <div className="total-card">
            <h2>Émissions totales</h2>
            <div className="total-value">{totalEmissions.toFixed(2)}</div>
            <div className="total-unit">tCO2e/an</div>
            <p className="total-context">
              Équivalent à {Math.round(totalEmissions * 111)} tours de la Terre en voiture
            </p>
          </div>

          <div className="total-stats">
            <div className="stat-item">
              <div className="stat-value">{emissions.length}</div>
              <div className="stat-label">Catégories analysées</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                {emissions.filter(e => e.scope === 1).reduce((sum, e) => sum + e.value, 0).toFixed(1)}
              </div>
              <div className="stat-label">Scope 1 (tCO2e)</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                {emissions.filter(e => e.scope === 3).reduce((sum, e) => sum + e.value, 0).toFixed(1)}
              </div>
              <div className="stat-label">Scope 3 (tCO2e)</div>
            </div>
          </div>
        </div>

        {/* Répartition par catégorie */}
        <div className="categories-breakdown">
          <h2>Répartition par catégorie</h2>
          <div className="categories-list">
            {emissions.sort((a, b) => b.value - a.value).map((emission, index) => (
              <div key={index} className="category-result">
                <div className="category-info">
                  <span className="category-name">{getCategoryName(emission.category)}</span>
                  <span className={`scope-badge scope-${emission.scope}`}>Scope {emission.scope}</span>
                </div>
                <div className="category-values">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${emission.percentage}%` }}
                    />
                  </div>
                  <span className="category-value">{emission.value.toFixed(2)} tCO2e</span>
                  <span className="category-percentage">{emission.percentage.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommandations */}
        <div className="recommendations-section">
          <h2>Recommandations prioritaires</h2>
          <div className="recommendations-grid">
            {getRecommendations().map((rec, index) => (
              <div key={index} className={`recommendation-card priority-${rec.priority}`}>
                <div className="recommendation-header">
                  <span className="recommendation-priority">
                    {rec.priority === 'high' ? 'Priorité haute' : 
                     rec.priority === 'medium' ? 'Priorité moyenne' : 'Priorité basse'}
                  </span>
                  <span className="recommendation-impact">{rec.impact}</span>
                </div>
                <h3 className="recommendation-title">{rec.title}</h3>
                <p className="recommendation-description">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="actions-grid">
          <button className="action-btn primary">
            <span className="btn-icon">📊</span>
            <span className="btn-text">Exporter PDF</span>
            <span className="btn-description">Rapport complet</span>
          </button>
          <button className="action-btn secondary">
            <span className="btn-icon">📈</span>
            <span className="btn-text">Exporter Excel</span>
            <span className="btn-description">Données détaillées</span>
          </button>
          <button className="action-btn tertiary">
            <span className="btn-icon">📧</span>
            <span className="btn-text">Partager</span>
            <span className="btn-description">Envoyer par email</span>
          </button>
          <button className="action-btn quaternary">
            <span className="btn-icon">💾</span>
            <span className="btn-text">Sauvegarder</span>
            <span className="btn-description">Conserver l'analyse</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Results;