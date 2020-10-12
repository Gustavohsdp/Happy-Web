import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

import MapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/OrphanagesMap.css";

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

      <Map
        center={[-19.6650213, -43.2231259]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
