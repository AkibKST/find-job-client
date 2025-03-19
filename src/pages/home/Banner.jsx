import React from "react";
import { easeIn, easeInOut, motion } from "motion/react";
import team1 from "../../assets/bannerImg/team1.jpg";
import team2 from "../../assets/bannerImg/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 30, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            src={team1}
            className="max-w-sm w-72 mt-12 rounded-t-[40px] rounded-br-[40px] border-l-6 border-b-6 border-blue-600 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 130, 100] }}
            transition={{
              duration: 8,
              delay: 4,
              repeat: Infinity,
            }}
            src={team2}
            className="max-w-sm w-64 mb-12  rounded-t-[40px] rounded-br-[40px] border-l-6 border-b-6 border-blue-600 shadow-2xl"
          />
        </div>
        <div className="flex-1 ">
          <motion.h1
            animate={{ x: [0, 15, 0] }}
            transition={{
              duration: 10,
              delay: 0.2,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            The{" "}
            <motion.span
              animate={{ color: ["#0563f9", "#33ffe3", "#f96f05"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Easiest Way
            </motion.span>
          </motion.h1>
          <motion.h1
            animate={{ x: [15, 40, 15] }}
            transition={{
              duration: 10,
              delay: 0.2,
              ease: easeIn,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            to Get Your New Job!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
