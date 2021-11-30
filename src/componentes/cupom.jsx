import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Cupom(props) {

  //configura propiedades de estilo para o componente de percentual de desconto
  const borderStyle = {
    border: "1px solid",
    flexDirection: "row",
    flex: "1",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "9rem",
    fontWeight: "bold",
  };

  //Renderiza o componente de cupom
  //Usa o componente <Link /> para redirecionar para rota ./Edit/{:id}
  return (
    <li className="list-group-item">
      <div className="card">
        
        <div className="card-body">
          <div className="row">
            <div className="col-4" style={borderStyle}>{props.cupom.percentual}%</div>
            <div className="col-8">
              <h6 className="card-title">{props.cupom.loja}</h6>
              <p className="card-text">{props.cupom.descricao}</p>
              <p className="card-text"><span className="boldStyle">Valor Mínimo:</span> R${props.cupom.valorMin}</p>
              <p className="card-text"><span className="boldStyle">Data de expiração:</span> {props.cupom.dataExpiracao}</p>
              <p className="card-text"><span className="boldStyle">Código:</span> {props.cupom.codigo}</p>
              <Link to={"/edit/" + props.cupom.id} 
              className="btn btn-primary">Editar cupom</Link>
            </div>
          </div>
        </div>
      </div>

    </li>
  );
}
export default Cupom;
