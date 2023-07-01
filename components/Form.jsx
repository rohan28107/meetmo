"use client"

import { useState } from 'react';
import Slider from './Slider';

const Form = () => {
  const [nodeName, setNodeName] = useState('');
  const [dicta, setDicta] = useState('');
  const [eosEtRem, setEosEtRem] = useState('');
  const [sitNihilExpedita, setSitNihilExpedita] = useState(true);
  const [rerum, setRerum] = useState('');

  const handleToggle = () => {
    setSitNihilExpedita(!sitNihilExpedita);
  };
  // const value = 30;
  const generateRandomValue = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomValue1 = generateRandomValue();
  const randomValue2 = generateRandomValue();
  const randomValue3 = generateRandomValue();


  return (
    <div className="bg-gray-800  flex items-center justify-center mt-[-120]">
      {/* min-h-screen */}
      <div className="bg-gray-800 px-8 py-1 rounded-lg">
        <h1 className="text-white text-2xl mb-2">Form Component</h1>
        <div className='w-full'>
          <input
            type="text"
            className="bg-transparent w-full border-2 border-grey-800 text-white mb-2 focus:outline-none"
            placeholder="Node name"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="bg-transparent w-full border-2 border-grey-100 text-white mb-2 focus:outline-none"
            placeholder="dicta amet consequatur"
            value={dicta}
            onChange={(e) => setDicta(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="bg-transparent w-full border-2 border-grey-100 text-white mb-2 focus:outline-none"
            placeholder="eos et rem"
            value={eosEtRem}
            onChange={(e) => setEosEtRem(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 items-center mb-4">
          <input
            type="text"
            className="bg-transparent border-2 border-grey-100 text-white mb-2 focus:outline-none"
            placeholder="dicta amet consequatur"
            value={dicta}
            onChange={(e) => setDicta(e.target.value)}
          />
          <input
            type="text"
            className="bg-transparent border-2 border-grey-100 text-white mb-2 focus:outline-none"
            placeholder="eos et rem"
            value={eosEtRem}
            onChange={(e) => setEosEtRem(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="toggle" className="text-white mr-2">
            sit nihil expedita
          </label>
          <button
            id="toggle"
            className={`w-12 h-6 rounded-full focus:outline-none ${
              sitNihilExpedita
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                : 'bg-gray-400'
            }`}
            onClick={handleToggle}
          >
            <span
              className={`inline-block w-4 h-4 rounded-full ${
                sitNihilExpedita ? 'translate-x-2' : 'translate-x-[-15]' 
              } bg-white transform transition-transform duration-200`}
            />
          </button>
        </div>
        <div>
          <Slider text="Earum dolorem" defaultValue={randomValue1} />
          <Slider text="est explicabo dolore" defaultValue={randomValue2} />
          <Slider text="optio in quisquam" defaultValue={randomValue3} />
        </div>
      </div>
    </div>
  );
};

export default Form;
