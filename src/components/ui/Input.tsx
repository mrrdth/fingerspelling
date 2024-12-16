
import { useState } from 'react';

export function Input({ label, onSubmit }: { label: string, onSubmit: (value: string) => void }) {
  const [text, setText] = useState<string>("");
  const onClick = () => {
    onSubmit(text);
  }
  return (
    <div className='container'>
      <label>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={onClick}>Guess</button>
      </label>
    </div>
  );
}
