import React from 'react';

const FoodForm: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({ data, onChange }) => (
  <div className="form-sections">
    <div className="form-section">
      <h3>Alimentation et restauration</h3>
      <div className="form-grid-2">
        <div className="form-group">
          <label>Nombre de repas/an</label>
          <input type="number" value={data.meals || ''} onChange={(e) => onChange('meals', parseInt(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Part de repas végétariens (%)</label>
          <input type="number" min="0" max="100" value={data.vegetarian_percentage || ''} onChange={(e) => onChange('vegetarian_percentage', parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  </div>
);

export default FoodForm;