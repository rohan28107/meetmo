// import Image from 'next/image';
// import React from 'react';

// const Mediaplayer = () => {
//   return (
//     <div className="relative w-full">
//       <Image src="/assets/images/human.png" width={100} height={400} alt="Media Player" className="w-full" />

//       <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 px-4">
//         {/* Media controls go here */}
//         <button className="text-white">Play</button>
//         <button className="text-white">Pause</button>
//         <button className="text-white">Volume</button>
//         {/* Add more controls as needed */}
//       </div>
//     </div>
//   );
// };

// export default Mediaplayer;

import Image from 'next/image';
import React from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaExpand, FaCompress, FaRedo, FaFastForward, FaFastBackward } from 'react-icons/fa';
import { PiSpeakerHighDuotone } from 'react-icons/pi'; 
import { GrPrevious } from 'react-icons/gr';


const MediaPlayer = () => {
  return (
    <div className="relative w-95 m-4">
      <Image src="/assets/images/human.png" width={100} height={400} alt="Media Player" className="w-full" />

      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 px-4 flex justify-between items-center">
        {/* Repeat button */}
        <button className="text-white">
          <FaRedo />
        </button>

        <button className="text-white">
          1x
        </button>

        <button className="text-white">
          <PiSpeakerHighDuotone />
        </button>


        {/* Rewind button */}
        <button className="text-white">
          <FaFastBackward />
        </button>

        {/* Previous button */}
        <button className="text-white">
          <FaStepBackward />
        </button>

        {/* Pause button */}
        <button className="text-white">
          <FaPause />
        </button>

        {/* Timestamp */}
        <span className="text-white">0:00:27:45</span>

        {/* Play button */}
        <button className="text-white">
          <FaPlay />
        </button>

        

        {/* Forward button */}
        <button className="text-white">
          <FaFastForward />
        </button>

        {/* Next button */}
        <button className="text-white">
          <FaStepForward />
        </button>

        

        {/* Fullscreen button */}
        <button className="text-white ml-10">
          <FaExpand />
        </button>

        
      </div>
    </div>
  );
};

export default MediaPlayer;
