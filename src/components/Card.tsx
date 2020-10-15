import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/card.css";
import "../styles/components/animation.css";

interface card {
  recipe: string;
  url: string;
}

export default (props: card) => {
  return (
    <Link to={`/recipes/${props.recipe}`} className="cardLink animate-zoom">
      <div id="card">
        <img src={props.url} alt="Recipe" />
        <div className="footer">{props.recipe}</div>
      </div>
    </Link>
  );
};
