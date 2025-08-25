import React from 'react';

const CommuteForm: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({ data, onChange }) => (
  <div className="form-sections">
    <div className="form-section">
      <h3>Déplacements domicile-travail</h3>
      <div className="form-grid-2">
        <div className="form-group">
          <label>Nombre de collaborateurs</label>
          <input type="number" value={data.employees || ''} onChange={(e) => onChange('employees', parseInt(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Distance moyenne (km/jour)</label>
          <input type="number" value={data.avg_distance || ''} onChange={(e) => onChange('avg_distance', parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  </div>
);

export default CommuteForm;