import React from "react";
import Navbar from "../Components/Navbar";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09, duration: 0.6 }}
        className="flex flex-col justify-around w-full h-2/6 items-center mt-32 px-8"
      >
        <h1 className="text-indigo-700 text-4xl text-center tracking-wide">
          Efficiency starts with organization: Keep your goals in sight.
        </h1>
        <p className="text-indigo-700 italic text-center mt-12 tracking-wide">
          Keep track of your day, calculate your daily calorie needs, find the
          best exercises for you and stay motivated!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09, duration: 0.6 }}
        className="flex w-full h-1/6 items-center justify-center text-indigo-700 text-2xl mt-8 tracking-wider"
      >
        <h3 className="mr-1">Organize your</h3>
        <Typewriter
          options={{
            strings: ["DAY!", "DIET!", "WORKOUT!", "LIFE!"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
