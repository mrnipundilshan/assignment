import { useState } from 'react';

export default function FontSizeAdjust() {

  const [fontSize, setFontSize] = useState('medium');
  
  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };
  
  return (
    <div className="font-selector">
      <button onClick={() => handleFontSizeChange('small')}>Small</button>
      <button onClick={() => handleFontSizeChange('medium')}>Medium</button>
      <button onClick={() => handleFontSizeChange('large')}>Large</button>
    </div>
  );
}
