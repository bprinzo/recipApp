import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import Card from "../components/Card";
import "../styles/pages/recipes.css";
import macarrao from "../images/macarrao.jpg";

export default () => {
  return (
    <div id="page-recipes">
      <aside>
        <header>
          <h2 className="animate-right">Escolha uma receita</h2>
          <p className="animate-right">todas são uma delicia :) </p>
        </header>

        <footer className="animate-right">
          Receitas desde <strong>1945</strong>
        </footer>
      </aside>
      <div className="cardDiv">
        <Card recipe="Macarrao" url={macarrao}></Card>
        <Card recipe="Macarrao" url={macarrao}></Card>
        <Card recipe="Macarrao" url={macarrao}></Card>
        <Card recipe="Macarrao" url={macarrao}></Card>
        <Card recipe="Macarrao" url={macarrao}></Card>
        <Card recipe="Macarrao" url={macarrao}></Card>
        <Card recipe="Macarrao" url={macarrao}></Card>
        <Card recipe="Macarrao" url={macarrao}></Card>
      </div>
      <Link to="" className="create-recipe">
        <FiPlus size={32} color="fff" />
      </Link>
    </div>
  );
};
