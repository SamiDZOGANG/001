import React from 'react';

const AttendanceForm: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({ data, onChange }) => (
  <div className="form-sections">
    <div className="form-section">
      <h3>Fréquentation</h3>
      <div className="form-grid-2">
        <div className="form-group">
          <label>Nombre de visiteurs/an</label>
          <input type="number" value={data.visitors || ''} onChange={(e) => onChange('visitors', parseInt(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Distance moyenne parcourue (km)</label>
          <input type="number" value={data.avg_distance || ''} onChange={(e) => onChange('avg_distance', parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  </div>
);

export default AttendanceForm;