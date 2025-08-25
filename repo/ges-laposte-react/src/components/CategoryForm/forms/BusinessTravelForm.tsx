import React from 'react';

const BusinessTravelForm: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({ data, onChange }) => (
  <div className="form-sections">
    <div className="form-section">
      <h3>Déplacements professionnels</h3>
      <div className="form-grid-3">
        <div className="form-group">
          <label>Train (km/an)</label>
          <input type="number" value={data.train || ''} onChange={(e) => onChange('train', parseFloat(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Avion (km/an)</label>
          <input type="number" value={data.plane || ''} onChange={(e) => onChange('plane', parseFloat(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Voiture (km/an)</label>
          <input type="number" value={data.car || ''} onChange={(e) => onChange('car', parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  </div>
);

export default BusinessTravelForm;