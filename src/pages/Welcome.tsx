import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import "../styles/pages/welcome.css";
import "../styles/components/animation.css";

export default () => {
  return (
    <div id="page-welcome">
      <div className="content-wrapper animate-left">
        <main>
          <h1 className="animate-right">Receitas da familia!</h1>
          <p className="animate-right">
            Atualize as receitas de uma maneira pratica
          </p>
        </main>
        <div className="date animate-left">
          Receitas desde <strong>1945</strong>
        </div>

        <Link to="/recipes" className="enter-app animate-left">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
};
