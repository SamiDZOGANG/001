import React from 'react';

const TransportForm: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({ data, onChange }) => (
  <div className="form-sections">
    <div className="form-section">
      <h3>Transport sous-traité</h3>
      <div className="form-grid-2">
        <div className="form-group">
          <label>Distance totale (km/an)</label>
          <input type="number" value={data.distance || ''} onChange={(e) => onChange('distance', parseFloat(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Tonnage transporté (t/an)</label>
          <input type="number" value={data.tonnage || ''} onChange={(e) => onChange('tonnage', parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  </div>
);

export default TransportForm;