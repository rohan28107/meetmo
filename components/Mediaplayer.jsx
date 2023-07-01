import Image from 'next/image';
import React from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaExpand, FaCompress, FaRedo, FaFastForward, FaFastBackward } from 'react-icons/fa';
import { PiSpeakerHighDuotone } from 'react-icons/pi'; 


const MediaPlayer = () => {
  return (
    <div className="relative w-95 m-4">
      <Image src="/assets/images/human.png" width={440} height={312} alt="Media Player"/>

      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 px-4 flex justify-between items-center">

        <button className="text-white">
          <FaRedo />
        </button>

        <button className="text-white">
          1x
        </button>

        <button className="text-white">
          <PiSpeakerHighDuotone />
        </button>

        <button className="text-white">
          <FaFastBackward />
        </button>

        <button className="text-white">
          <FaStepBackward />
        </button>

        <button className="text-white">
          <FaPause />
        </button>

        <span className="text-white">0:00:27:45</span>

        <button className="text-white">
          <FaPlay />
        </button>

        <button className="text-white">
          <FaFastForward />
        </button>

        <button className="text-white">
          <FaStepForward />
        </button>

        <button className="text-white ml-10">
          <FaExpand />
        </button>
        
      </div>
    </div>
  );
};

export default MediaPlayer;
