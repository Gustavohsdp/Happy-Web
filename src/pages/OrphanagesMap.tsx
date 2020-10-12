import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import MapMarkerImg from "../images/map-marker.svg";

import '../styles/pages/OrphanagesMap.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanoto no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Iabira</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
