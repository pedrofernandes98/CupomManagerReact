import React, { useState } from 'react';
import Cupom from './cupom';
import { Link } from "react-router-dom";


function Cupons(props) {
  //interface que renderiza uma lista de componentes do tipo <Cupom >
  return (
    <div className="container">
      <br />
      <div className="input-group justify-content-center">
          <span className="input-group-append">
            <Link to="/add"
              className="btn btn-secondary"
              type="submit"
            >
            Adicionar Cupom
            </Link>
          </span>
      </div>
      {props.cupons.length > 0 && (
        <ul className="list-group mt-4">
          {props.cupons.map((t, i) => (
            <Cupom
              key={i}
              cupom={t}
              onAltera={props.onAltera}
              onApaga={props.onApaga}
            />
          ))}
        </ul>
      )}
      
        
    </div>
  );
}

export default Cupons;
