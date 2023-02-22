import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";

const Fitness = () => {
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const listRef = useRef(null);

  // handle selected inputs
  const handleSelectedMoves = (event) => {
    setSelectedMoves([...selectedMoves, event.target.value]);
  };
  // handle button click
  const handleButtonClick = () => {
    setButtonClicked((prev) => !prev);
  };

  useEffect(() => {
    if (buttonClicked && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [buttonClicked]);

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09, duration: 0.6 }}
        className="fitness-header mt-12"
      >
        <h1 className="text-2xl text-center text-indigo-700 font-medium tracking-wide md:text-3xl">
          Do you need guidence on your next fitness program?
        </h1>
        <p className="text-center mt-10 text-indigo-700 italic text-lg underline">
          Let's create together!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09, duration: 0.6 }}
        className="flex flex-col justify-center items-center mt-8"
      >
        <h2 className="text-center text-indigo-700 text-xl">
          Select at least 2 moves for each body part!
        </h2>
        <div className="body-parts flex flex-wrap justify-center mx-4 mt-2 md:w-5/6 ">
          <div className="flex flex-col items-center border-solid border-indigo-300 border md:5/6 w-2/6 m-2 p-4 rounded-lg bg-indigo-100 space-y-2">
            <h3 className="text-center text-indigo-700 text-xl">Chest</h3>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Bench Press</span>
              <input
                type="checkbox"
                value="Bench Press"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Chest Fly</span>
              <input
                type="checkbox"
                value="Chest Fly"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Cable Cross</span>
              <input
                type="checkbox"
                value="Cable Cross"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Incline Bench Press</span>
              <input
                type="checkbox"
                value="Incline Bench Press"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Push Ups</span>
              <input
                type="checkbox"
                value="Push Ups"
                onChange={handleSelectedMoves}
              />
            </label>
          </div>
          <div className="flex flex-col items-center border-solid border-indigo-300 border md:5/6 w-2/6 m-2 p-4 rounded-lg bg-indigo-100 space-y-2">
            <h3 className="text-center text-indigo-700 text-xl">Back</h3>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Pull Ups</span>
              <input
                type="checkbox"
                value="Pull Ups"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Dumbell Rows</span>
              <input
                type="checkbox"
                value="Dumbell Rows"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>DeadLifts</span>
              <input
                type="checkbox"
                value="DeadLifts"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Lat Pulldown</span>
              <input
                type="checkbox"
                value="Lat Pulldown"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Farmer's Walk</span>
              <input
                type="checkbox"
                value="Farmer's Walk"
                onChange={handleSelectedMoves}
              />
            </label>
          </div>
          <div className="flex flex-col items-center border-solid border-indigo-300 border md:5/6 w-2/6 m-2 p-4 rounded-lg bg-indigo-100 space-y-2">
            <h3 className="text-center text-indigo-700 text-xl">Legs</h3>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Squats</span>
              <input
                type="checkbox"
                value="Squats"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Leg Extensions</span>
              <input
                type="checkbox"
                value="Leg Extensions"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Leg Curls</span>
              <input
                type="checkbox"
                value="Leg Curls"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Leg Press</span>
              <input
                type="checkbox"
                value="Leg Press"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Hack Squat</span>
              <input
                type="checkbox"
                value="Hack Squat"
                onChange={handleSelectedMoves}
              />
            </label>
          </div>
          <div className="flex flex-col items-center border-solid border-indigo-300 border md:5/6 w-2/6 m-2 p-4 rounded-lg bg-indigo-100 space-y-2">
            <h3 className="text-center text-indigo-700 text-xl">Shoulders</h3>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Push-Press</span>
              <input
                type="checkbox"
                value="Push-Press"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Military Press</span>
              <input
                type="checkbox"
                value="Military Press"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Seated Dumbbell Press</span>
              <input
                type="checkbox"
                value="Seated Dumbbell Press"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Arnold Press</span>
              <input
                type="checkbox"
                value="Arnold Press"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Rear Delt Fly</span>
              <input
                type="checkbox"
                value="Rear Delt Fly"
                onChange={handleSelectedMoves}
              />
            </label>
          </div>
          <div className="flex flex-col items-center border-solid border-indigo-300 border md:5/6 w-2/6 m-2 p-4 rounded-lg bg-indigo-100 space-y-2">
            <h3 className="text-center text-indigo-700 text-xl">Arms</h3>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Bicep Curls</span>
              <input
                type="checkbox"
                value="Bicep Curls"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Twisting Curls</span>
              <input
                type="checkbox"
                value="Twisting Curls"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Reverse Curls</span>
              <input
                type="checkbox"
                value="Reverse Curls"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Tricep Extensions</span>
              <input
                type="checkbox"
                value="Tricep Extensions"
                onChange={handleSelectedMoves}
              />
            </label>
            <label className="flex justify-between w-full md:w-2/6">
              <span>Skullcrushers</span>
              <input
                type="checkbox"
                value="Skullcrushers"
                onChange={handleSelectedMoves}
              />
            </label>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="text-center p-2 mt-2 text-white rounded-xl bg-indigo-700 w-36 mb-4"
        >
          Create the List
        </button>
      </motion.div>
      {buttonClicked && (
        <div className="flex justify-center mb-4">
          <ul
            ref={listRef}
            className="flex flex-col text-center border border-solid border-indigo-300 w-3/4 lg:w-2/4 p-4 space-y-2 bg-indigo-100 rounded-lg"
          >
            <h2 className="text-xl text-indigo-700 underline">
              Here is your sample programme !
            </h2>
            {selectedMoves.map((move) => {
              return <li>{move} 2-3 sets x 8-12 reps</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Fitness;
