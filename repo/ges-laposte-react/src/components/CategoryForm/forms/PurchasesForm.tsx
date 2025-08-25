import React from 'react';

const PurchasesForm: React.FC<{ data: any; onChange: (field: string, value: any) => void }> = ({ data, onChange }) => (
  <div className="form-sections">
    <div className="form-section">
      <h3>Achats et consommables</h3>
      <div className="form-grid-3">
        <div className="form-group compact">
          <label>Papier <small>(tonnes/an)</small></label>
          <input type="number" value={data.paper || ''} onChange={(e) => onChange('paper', parseFloat(e.target.value))} />
        </div>
        <div className="form-group compact">
          <label>Matériel informatique <small>(unités/an)</small></label>
          <input type="number" value={data.it_equipment || ''} onChange={(e) => onChange('it_equipment', parseInt(e.target.value))} />
        </div>
        <div className="form-group compact">
          <label>Fournitures <small>(€/an)</small></label>
          <input type="number" value={data.supplies || ''} onChange={(e) => onChange('supplies', parseFloat(e.target.value))} />
        </div>
      </div>
    </div>
  </div>
);

export default PurchasesForm;