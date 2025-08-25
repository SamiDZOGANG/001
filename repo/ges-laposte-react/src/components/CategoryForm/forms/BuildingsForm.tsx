import React from 'react';

interface BuildingsFormProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const BuildingsForm: React.FC<BuildingsFormProps> = ({ data, onChange }) => {
  return (
    <div className="form-sections">
      <div className="form-section">
        <h3>Consommation énergétique</h3>
        
        <div className="form-grid-3">
          <div className="form-group compact">
            <label htmlFor="electricity">
              Électricité
              <small>kWh/an</small>
            </label>
            <input
              type="number"
              id="electricity"
              value={data.electricity || ''}
              onChange={(e) => onChange('electricity', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="gas">
              Gaz naturel
              <small>kWh/an</small>
            </label>
            <input
              type="number"
              id="gas"
              value={data.gas || ''}
              onChange={(e) => onChange('gas', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="fuel">
              Fioul
              <small>Litres/an</small>
            </label>
            <input
              type="number"
              id="fuel"
              value={data.fuel || ''}
              onChange={(e) => onChange('fuel', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group compact">
            <label htmlFor="district_heating">
              Réseau de chaleur
              <small>kWh/an</small>
            </label>
            <input
              type="number"
              id="district_heating"
              value={data.district_heating || ''}
              onChange={(e) => onChange('district_heating', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="wood">
              Bois
              <small>Tonnes/an</small>
            </label>
            <input
              type="number"
              id="wood"
              value={data.wood || ''}
              onChange={(e) => onChange('wood', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Informations complémentaires</h3>
        
        <div className="form-grid-2">
          <div className="form-group">
            <label htmlFor="surface">Surface totale (m²)</label>
            <input
              type="number"
              id="surface"
              value={data.surface || ''}
              onChange={(e) => onChange('surface', parseFloat(e.target.value))}
              placeholder="Surface en m²"
            />
          </div>

          <div className="form-group">
            <label htmlFor="building_type">Type de bâtiment</label>
            <select
              id="building_type"
              value={data.building_type || ''}
              onChange={(e) => onChange('building_type', e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="bureau">Bureau</option>
              <option value="entrepot">Entrepôt</option>
              <option value="centre_tri">Centre de tri</option>
              <option value="agence">Agence postale</option>
              <option value="mixte">Mixte</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="renewable_energy">
            <input
              type="checkbox"
              id="renewable_energy"
              checked={data.renewable_energy || false}
              onChange={(e) => onChange('renewable_energy', e.target.checked)}
            />
            {' '}Utilisation d'énergies renouvelables
          </label>
        </div>

        {data.renewable_energy && (
          <div className="form-group">
            <label htmlFor="renewable_percentage">
              Pourcentage d'énergie renouvelable (%)
            </label>
            <input
              type="number"
              id="renewable_percentage"
              min="0"
              max="100"
              value={data.renewable_percentage || ''}
              onChange={(e) => onChange('renewable_percentage', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>
        )}
      </div>

      <div className="form-section">
        <h3>Notes et observations</h3>
        <div className="form-group">
          <textarea
            rows={4}
            value={data.notes || ''}
            onChange={(e) => onChange('notes', e.target.value)}
            placeholder="Ajoutez des informations complémentaires sur vos bâtiments..."
            style={{ width: '100%', resize: 'vertical' }}
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingsForm;