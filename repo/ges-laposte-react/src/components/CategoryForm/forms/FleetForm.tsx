import React from 'react';

interface FleetFormProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const FleetForm: React.FC<FleetFormProps> = ({ data, onChange }) => {
  return (
    <div className="form-sections">
      <div className="form-section">
        <h3>Flotte de véhicules postaux</h3>
        
        <div className="form-grid-4">
          <div className="form-group compact">
            <label htmlFor="velo">
              Vélos
              <small>Nombre</small>
            </label>
            <input
              type="number"
              id="velo"
              value={data.velo || ''}
              onChange={(e) => onChange('velo', parseInt(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="velo_elec">
              Vélos électriques
              <small>Nombre</small>
            </label>
            <input
              type="number"
              id="velo_elec"
              value={data.velo_elec || ''}
              onChange={(e) => onChange('velo_elec', parseInt(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="staby">
              Staby
              <small>Nombre</small>
            </label>
            <input
              type="number"
              id="staby"
              value={data.staby || ''}
              onChange={(e) => onChange('staby', parseInt(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="quadeo">
              Quadéo
              <small>Nombre</small>
            </label>
            <input
              type="number"
              id="quadeo"
              value={data.quadeo || ''}
              onChange={(e) => onChange('quadeo', parseInt(e.target.value))}
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-grid-3">
          <div className="form-group compact">
            <label htmlFor="vh_leger">
              Véhicules légers
              <small>Nombre</small>
            </label>
            <input
              type="number"
              id="vh_leger"
              value={data.vh_leger || ''}
              onChange={(e) => onChange('vh_leger', parseInt(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="vh_utilitaire">
              Véhicules utilitaires
              <small>Nombre</small>
            </label>
            <input
              type="number"
              id="vh_utilitaire"
              value={data.vh_utilitaire || ''}
              onChange={(e) => onChange('vh_utilitaire', parseInt(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="poids_lourd">
              Poids lourds
              <small>Nombre</small>
            </label>
            <input
              type="number"
              id="poids_lourd"
              value={data.poids_lourd || ''}
              onChange={(e) => onChange('poids_lourd', parseInt(e.target.value))}
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Consommation de carburant</h3>
        
        <div className="form-grid-3">
          <div className="form-group compact">
            <label htmlFor="essence">
              Essence
              <small>Litres/an</small>
            </label>
            <input
              type="number"
              id="essence"
              value={data.essence || ''}
              onChange={(e) => onChange('essence', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="diesel">
              Diesel
              <small>Litres/an</small>
            </label>
            <input
              type="number"
              id="diesel"
              value={data.diesel || ''}
              onChange={(e) => onChange('diesel', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="gnv">
              GNV
              <small>kg/an</small>
            </label>
            <input
              type="number"
              id="gnv"
              value={data.gnv || ''}
              onChange={(e) => onChange('gnv', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group compact">
            <label htmlFor="elec_kwh">
              Électricité véhicules
              <small>kWh/an</small>
            </label>
            <input
              type="number"
              id="elec_kwh"
              value={data.elec_kwh || ''}
              onChange={(e) => onChange('elec_kwh', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>

          <div className="form-group compact">
            <label htmlFor="hydrogene">
              Hydrogène
              <small>kg/an</small>
            </label>
            <input
              type="number"
              id="hydrogene"
              value={data.hydrogene || ''}
              onChange={(e) => onChange('hydrogene', parseFloat(e.target.value))}
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Kilométrage annuel</h3>
        <div className="form-group">
          <label htmlFor="km_total">Kilométrage total annuel</label>
          <input
            type="number"
            id="km_total"
            value={data.km_total || ''}
            onChange={(e) => onChange('km_total', parseFloat(e.target.value))}
            placeholder="Kilomètres parcourus par an"
          />
        </div>
      </div>
    </div>
  );
};

export default FleetForm;