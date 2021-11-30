import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function AddCupom(props) {

  //Objeto para retornar a página anterior
  const history = useHistory(); 
  //Declara as propriedades Hooks
  //A propriedade novoCupom já é declarada recebendo o seu respectivo id
  const [novoCupom, setNovoCupom] = useState({id: Math.random().toString().replace('0.', '')});

  //Altera o valor da propriedade novoCupom de acordo com o nome do campo 
  const changeValue = e => {
    //clona o objeto no state
    const auxNovoCupom = { ...novoCupom };
    //de qualquer forma insere no state value, senão limpa o input do usuário.
    auxNovoCupom[e.target.name] = e.target.value;
    //seta o novo objeto
    setNovoCupom(auxNovoCupom);
  };

  //Renderiza o formulário de Novo Cupom
  //Permite incluir um novo registro ou retornar ao menu principal
  return (
    <div id="tela2" className="container">
      <div className="componentHeader">
        <h1 className="componentTitle">
          Novo cupom
        </h1>
      </div>
      <form onSubmit={(e) => {
        //chama o metodo de adicionar novo cupom
        props.onAdiciona(novoCupom);
        //retorna o state novoCupom para vazio
        setNovoCupom({});
        //previne que a página dê refresh
        e.preventDefault();
        //retorna a listagem de cupons
        history.push("/");
      }}>
        <div className="componentContent">
          <div className="field">
            <label htmlFor="inputCupom">Loja:</label>
            <input id="inputCupom" className="form-control" type="text" autoComplete="off" 
            name="loja"
            onChange={changeValue}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputDescricao">Descrição:</label>
              <input id="inputDescricao" className="form-control" type="text" autoComplete="off"
              name="descricao" 
              onChange={changeValue}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPercentual">Percentual de Desconto:</label>
            <input id="inputPercentual" type="number" className="form-control" autoComplete="off" min="0" max="100"
            name="percentual"
            onChange={changeValue}/>%
          </div>
          <div className="form-group">
            <label htmlFor="inputValorMinimo">Valor mínimo:</label>
            <input id="inputValorMinimo" type="number" className="form-control" autoComplete="off" min="0" step=".01"
            name="valorMin"
            onChange={changeValue}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputDataExpiracao">Data de Expiração</label>
              <input id="inputDataExpiracao" className="form-control" type="date"
              name="dataExpiracao" 
              onChange={changeValue}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputCodigo">Código:</label>
              <input id="inputCodigo" type="text" className="form-control" autoComplete="off" 
              name="codigo"
              onChange={changeValue}/>
          </div>
          <div className="btn-group">
            <button id="btnCanc1" className="btn btn-warning"
            onClick={(e) => {
              //retorna o state novoCupom para vazio
              setNovoCupom({});
              //previne que a página dê refresh
              e.preventDefault();
              //retorna a listagem de cupons
              history.push("/");
            }}
            >Cancelar</button>
            <button id="btnInc" className="btn btn-primary">
              Incluir
            </button>
          </div>
        </div>
      </form>
    </div>
    
  );
}

export default AddCupom;
