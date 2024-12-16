import { useState } from 'react';
import './Checkbox.css';

export function Checkbox({ label, onChange }: { label: string, onChange: (checked: boolean) => void }) {
  const [isChecked, setChecked] = useState(false);
  return (
    <div className='container'>
      <label>
        <input type="checkbox" onChange={() => {
          setChecked(!isChecked);
          onChange(!isChecked);
        }} />
        <span>{label}</span>
      </label>
    </div>
  );
}
