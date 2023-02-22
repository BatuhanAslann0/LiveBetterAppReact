import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "../Context/MyContext";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { motion } from "framer-motion";

const api_url = "https://type.fit/api/quotes";

const Motivation = () => {
  const { menuOpen } = useContext(MyContext);

  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const getQuotes = async (url) => {
      try {
        const response = await axios.get(url);
        setQuotes(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getQuotes(api_url);
  });

  const handlePrevClick = () => {
    if (currentQuoteIndex > 0) {
      setCurrentQuoteIndex(currentQuoteIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (currentQuoteIndex < quotes.length - 1) {
      setCurrentQuoteIndex(currentQuoteIndex + 1);
    }
  };

  const quoteSlice = quotes.slice(currentQuoteIndex, currentQuoteIndex + 3);

  return (
    <div className="h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="flex flex-col h-5/6 items-center justify-center mt-12"
      >
        <div className="flex space-x-2 mx-2 h-3/6 md:h-2/6 md:h-2/6">
          {quoteSlice.map((quote, index) => {
            const isCurrent = index === 1;
            const lastCurrent = index === 2;
            // const className = isCurrent ? "" : "blur-sm opacity-90";
            const className = isCurrent
              ? ""
              : menuOpen
              ? ""
              : "blur-sm opacity-90";
            const className2 = lastCurrent ? "blur-sm opacity-90" : "";
            return (
              <div
                className={`flex flex-col text-center justify-between w-4/12 bg-indigo-200 rounded-xl px-1 pt-10 pb-6 md:pb-8 md:pt-12 border-indigo-600 border border-solid ${className} ${className2}`}
              >
                <h2 className="text-xl text-gray-700">{quote.text}</h2>
                <h3 className="text-gray-700 italic">{quote.author}</h3>
              </div>
            );
          })}
        </div>
        <div className="buttons flex justify-between w-3/6 h-1/6 items-center">
          <button
            className="text-white bg-indigo-300 p-2 px-5 rounded-2xl hover:bg-indigo-400 "
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="text-white bg-indigo-300 p-2 px-5 rounded-2xl hover:bg-indigo-400"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
};
export default Motivation;
