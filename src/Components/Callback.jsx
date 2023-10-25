import React, { useState } from 'react';

export const Callback = (props) => {
    const [color, setColor] = useState('');

    const handleChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        props.onColorChange(newColor);
      };
  return (
    <div>
         <input
            type="text"
            placeholder="Enter a color"
            value={color}
            onChange={handleChange}
        />
    </div>
  )
}
