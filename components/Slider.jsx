import { useState, useEffect } from 'react';

const Slider = ({ text, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const handleSliderChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const sliderColor = `linear-gradient(80.15deg, #3D44D9 27.01%, #01C5FF ${value}%, #BDBDBD ${value}%)`;

  useEffect(() => {
    const slider = document.getElementById(`slider-${text}`);
    slider.style.background = sliderColor;
  }, [value]);

  return (
    <div className="">
      <h2 className="text-white text-sm mb-2">{text}</h2>
      <input
        id={`slider-${text}`}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        className="slider-thumb mt-[-2] w-full h-1 rounded-lg appearance-none focus:outline-none bg-gray-200"
        style={{
          background: sliderColor
        }}
      />
    </div>
  );
};

export default Slider;
