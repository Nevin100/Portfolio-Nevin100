import { HERO_CONTENT } from "../utils";
import profilePIC from "../assets/NevinProfile.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Hero() {
  return (
    <>
      <Helmet>
        <title>Nevin Bali | Full Stack Engineer • GenAI • Cloud & DevOps</title>
        <meta name="description" content="Nevin Bali is a Full Stack Software Engineer specializing in React, Next.js, GenAI, and cloud-native systems." />
      </Helmet>

      <section
        id="home"
        className="relative min-h-[90vh] flex items-center border-b border-neutral-900 
                   px-6 sm:px-12 lg:px-24 py-20 overflow-hidden bg-[#0a0a0a]"
      >
        {/* Advanced Ambient Glows */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* TEXT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              Available for Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white"
            >
              NEVIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400">BALI</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-400"
            >
              I build <span className="text-white">scalable</span> & <span className="text-white">AI-driven</span> systems.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-xl text-neutral-400 text-lg leading-relaxed font-medium"
            >
              {HERO_CONTENT}
            </motion.p>            
          </div>

          {/* IMAGE CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Image Glow Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-sky-500/30 blur-[80px] rounded-full scale-75 animate-pulse" />
            
            <div className="relative group">
              <img
                src={profilePIC}
                alt="Nevin Bali Profile"
                className="w-72 sm:w-84 md:w-96 lg:w-[30rem] rounded-[3rem] object-cover border-2 border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 p-6 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-3xl hidden sm:block shadow-2xl">
                <div className="text-3xl font-black text-white">2+</div>
                <div className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Hero;