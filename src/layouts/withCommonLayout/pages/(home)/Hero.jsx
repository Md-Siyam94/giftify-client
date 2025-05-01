import { useState } from "react";
import BannerImage from "../../../../assets/gift.jpg"
import { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";


const Hero = () => {
  const words = ['Affection', 'Passion', 'Gratitude', 'Admiration', 'Care'];  // New: array of words to cycle through
  const [index, setIndex] = useState(0);                              // New: state to track current word

  useEffect(() => {                                                   // New: start interval on mount
    const intervalId = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);                    // New: loop index through words[]
    }, 2400);                                                         // New: switch every 2000ms
    return () => clearInterval(intervalId);                           // New: cleanup on unmount
  }, []);                                                            // New: run only once

  const direction = index % 2 === 0 ? 1 : -1;                      // New: alternate entry/exit direction per word

  const variants = {                                               // New: define reusable motion variants
    enter: (dir) => ({ opacity: 0, x: 30 * dir }),                 // New: start offscreen based on direction
    center: { opacity: 1, x: 0 },                            // New: centered, fully visible
    exit: (dir) => ({ opacity: 0, x: -30 * dir }),                // New: exit offscreen opposite to entry
  };

  return (
    <div
      className="hero h-[320px] md:min-h-screen bg-cover bg-center"  // Modified: use bg-cover & bg-center utilities
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>      {/* New: semi-transparent overlay for text legibility */}

      <div className="text-center">
        <div className="max-w-screen-2xl mx-auto px-4">                       {/* New: padding & centering */}
          <div className=" lg:-mt-32 space-y-3 text-4xl md:text-5xl lg:text-7xl font-bold text-gray-100">
            Send Gifts to Loved One With&nbsp;
            <br />

            <AnimatePresence mode="wait">                                  {/* Modified: use mode="wait" for smoother sequencing */}
              <motion.span
                key={words[index]}                                          // New: re-mount on each word change
                variants={variants}                                         // New: attach your variants object
                initial="enter"                                             // New: apply enter variant
                animate="center"                                            // New: apply center variant
                exit="exit"                                                 // New: apply exit variant
                custom={direction}                                          // New: pass direction into variants
                transition={{ duration: 0.8, ease: 'easeInOut' }}           // Modified: slightly longer + smoother ease
                className="inline-block"                                    // New: ensure proper inline spacing
              >
                <p className="text-[#c486ff]">{words[index]}</p>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-10 w-1/3 mx-auto">

          <a href="#trending">


            <button
              className="
            btn md:btn-lg btn-block
            bg-[#470c7e] text-white         
            border-0                            
            transition duration-150 ease-in-out 
            transform                           
            hover:scale-125                    
            hover:shadow-2xl                     
hover:shadow-white
            hover:bg-[#470c7e]                 
            hover:text-white                   
          "
            >
              {/* <Link to="#trending">
              Hot Deals
            </Link> */}
              Hot Deals
            </button>

          </a>


        </div>
      </div>
    </div>
  );
};

export default Hero;