import React from 'react';

const WasteForm: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({ data, onChange }) => (
  <div className="form-sections">
    <div className="form-section">
      <h3>Gestion des déchets</h3>
      <div className="form-grid-3">
        <div className="form-group compact">
          <label>Déchets recyclables <small>(tonnes/an)</small></label>
          <input type="number" value={data.recyclable || ''} onChange={(e) => onChange('recyclable', parseFloat(e.target.value))} />
        </div>
        <div className="form-group compact">
          <label>Déchets non recyclables <small>(tonnes/an)</small></label>
          <input type="number" value={data.non_recyclable || ''} onChange={(e) => onChange('non_recyclable', parseFloat(e.target.value))} />
        </div>
        <div className="form-group compact">
          <label>Déchets dangereux <small>(tonnes/an)</small></label>
          <input type="number" value={data.hazardous || ''} onChange={(e) => onChange('hazardous', parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  </div>
);

export default WasteForm;