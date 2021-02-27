import React from "react";
import { motion } from "framer-motion";
import { pageTransitionSlow, pageWipe } from "./common/Animation";

const Home = () => {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageWipe}
      transition={pageTransitionSlow}
      className="landing"
    >
      <div className="home col-lg-10 col-sm-12">
        {/* //=== Welcome ===//  */}
        <div className="welcome d-flex row">
          <div className="welcome-text col-lg-6 col-sm-12">Hello!!</div>
          <div className="welcome-container col-lg-6 col-sm-12">hi!</div>
        </div>

        {/* //=== Blurb ===//  */}

        {/* //=== Top Three Projects === // */}
      </div>
    </motion.div>
  );
};

export default Home;
