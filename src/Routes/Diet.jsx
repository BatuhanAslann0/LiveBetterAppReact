import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";

const Diet = () => {
  const [userData, setUserData] = useState({
    gender: "female",
    age: 0,
    height: 0,
    weight: 0,
    activityLevel: "sedentary",
  });
  const [dailyCalorieNeeds, setDailyCalorieNeeds] = useState(0);

  const calculateCalorieNeeds = () => {
    const { gender, height, weight, age, activityLevel } = userData;

    let basalMetabolicRate;
    if (gender === "male") {
      basalMetabolicRate = 66.5 + 13.7 * weight + 5 * height - 6.7 * age;
    } else {
      basalMetabolicRate = 65.5 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }

    let activityFactor;
    switch (activityLevel) {
      case "sedentary":
        activityFactor = 1.2;
        break;
      case "lightlyActive":
        activityFactor = 1.375;
        break;
      case "moderatelyActive":
        activityFactor = 1.55;
        break;
      case "veryActive":
        activityFactor = 1.725;
        break;
      case "extraActive":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    const dailyCalories = basalMetabolicRate * activityFactor;
    setDailyCalorieNeeds(dailyCalories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalorieNeeds();
  };
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09, duration: 0.6 }}
        className="header flex flex-col mt-12 mx-4"
      >
        <h1 className="text-2xl text-center text-indigo-700 font-medium tracking-wide md:text-3xl">
          Calculate your daily calorie requirement!
        </h1>
        <p className="text-center mt-10 text-indigo-700 italic text-lg">
          Calculating daily calorie needs is the first step in managing our
          weight and tracking our nutrition.
        </p>
        <p className="text-center mt-6 text-indigo-700 text-xl font-medium">
          Let's learn!
          <br />
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09, duration: 0.6 }}
        className="calculator flex flex-col items-center justify-center text-center mt-8"
      >
        <form className="flex flex-col w-64 space-y-3 border-solid border-indigo-300 border p-2 rounded-xl">
          <label className="flex justify-between items-center">
            <p className="text-indigo-700">Your Gender</p>
            <select
              className="outline-none p-1 rounded-lg bg-indigo-300s text-white bg-indigo-400 "
              name="gender"
              value={userData.gender}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
          <label className="flex justify-between items-center">
            <p className="text-indigo-700">Age</p>
            <input
              className="w-12 rounded-lg outline-none p-1 text-white bg-indigo-400"
              type="number"
              name="age"
              value={userData.age}
              onChange={(e) => {
                setUserData({ ...userData, age: e.target.value });
              }}
            />
          </label>
          <label className="flex justify-between items-center">
            <p className="text-indigo-700">Height (cm)</p>
            <input
              className="w-14 rounded-lg outline-none p-1 text-white bg-indigo-400 "
              type="number"
              name="height"
              value={userData.height}
              onChange={(e) => {
                setUserData({ ...userData, height: e.target.value });
              }}
            />
          </label>
          <label className="flex justify-between items-center">
            <p className="text-indigo-700">Weight (kg)</p>
            <input
              className="w-14 rounded-lg outline-none p-1 text-white bg-indigo-400 "
              type="number"
              name="weight"
              value={userData.weight}
              onChange={(e) => {
                setUserData({ ...userData, weight: e.target.value });
              }}
            />
          </label>
          <label className="flex justify-between items-center">
            <p className="text-indigo-700">Activity Level</p>
            <select
              className="w-6/12 py-1 outline-none bg-indigo-400 text-white rounded-lg"
              name="activityLevel"
              value={userData.activityLevel}
              onChange={(e) =>
                setUserData({ ...userData, activityLevel: e.target.value })
              }
            >
              <option value="sedentary">Not Active</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Active</option>
              <option value="veryActive">Very Active</option>
              <option value="extraActive">Extra Active</option>
            </select>
          </label>
          <button
            onClick={handleSubmit}
            className="bg-indigo-700 text-gray-200 rounded-lg py-1 hover:bg-indigo-600"
          >
            Calculate
          </button>
        </form>
        {dailyCalorieNeeds > 0 &&
        userData.age != 0 &&
        userData.weight != 0 &&
        userData.height > 100 ? (
          <p className="text-center mt-2 text-indigo-700">
            If you want to maintain your weight
            <br />
            Your daily calorie requirement is{" "}
            <span className="font-bold">
              {dailyCalorieNeeds.toFixed()}
            </span>{" "}
            kcal.
          </p>
        ) : (
          <div className="h-14" />
        )}
      </motion.div>
    </div>
  );
};

export default Diet;
