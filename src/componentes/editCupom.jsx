import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

function EditCupom(props) {
  //Objeto para retornar a página anterior
  const history = useHistory(); 
  //Recebe os parametros provinientes da URL
  const parametros = useParams();
  //Recebe o id enviado via URL
  const id = parametros.id;
  //Declara as propriedades Hooks
  //A propriedade cupom recebe o retorno da função getCupom() que busca o cupom da lista de cupons por id
  const [cupom, setCupom] = useState(() => props.getCupom(id));

  //Altera o valor da propriedade cupom de acordo com o nome do campo 
  const changeValue = e => {
    //clona o objeto no state
    const auxNovoCupom = { ...cupom };
    //de qualquer forma insere no state value, senão limpa o input do usuário.
    auxNovoCupom[e.target.name] = e.target.value;
    //seta o novo objeto
    setCupom(auxNovoCupom);
  };
  //Renderiza o formulário de edicação
  //Realiza o bind dos valores já cadastrados para o cupom enviado via URL na propriendade value dos campos do formulário
  return (
    <div id="tela3" className="container">
      <div className="componentHeader">
        <h1 className="componentTitle">
          Editar cupom
        </h1>
      </div>
      <form onSubmit={(e) => {
        //chama o metodo de alterar cupom
        props.onAltera(id,cupom);
        //retorna o state cupom para vazio
        setCupom({});
        //previne que a página dê refresh
        e.preventDefault();
        //retorna a listagem de cupoms
        history.push("/");
      }}>
        <div className="componentContent">
          <div className="field">
            <label htmlFor="inputCupom">Loja:</label>
            <input id="inputCupom" className="form-control" type="text" autoComplete="off" 
            name="loja"
            value={cupom.loja}
            onChange={changeValue}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputDescricao">Descrição:</label>
              <input id="inputDescricao" className="form-control" type="text" autoComplete="off"
              name="descricao" 
              value={cupom.descricao}
              onChange={changeValue}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPercentual">Percentual de Desconto:</label>
            <input id="inputPercentual" type="number" className="form-control" autoComplete="off" min="0" max="100"
            name="percentual"
            value={cupom.percentual}
            onChange={changeValue}/>%
          </div>
          <div className="form-group">
            <label htmlFor="inputValorMinimo">Valor mínimo:</label>
            <input id="inputValorMinimo" type="number" className="form-control" autoComplete="off" min="0" step=".01"
            name="valorMin"
            value={cupom.valorMin}
            onChange={changeValue}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputDataExpiracao">Data de Expiração</label>
              <input id="inputDataExpiracao" className="form-control" type="date"
              name="dataExpiracao" 
              value={cupom.dataExpiracao}
              onChange={changeValue}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputCodigo">Código:</label>
              <input id="inputCodigo" type="text" className="form-control" autoComplete="off" 
              name="codigo"
              value={cupom.codigo}
              onChange={changeValue}/>
          </div>
          <div className="btn-group">
            <button id="btnCanc1" className="btn btn-warning"
            onClick={(e) => {
              //retorna o state cupom para vazio
              setCupom({});
              //previne que a página dê refresh
              e.preventDefault();
              //retorna a listagem de cupons
              history.push("/");
            }}
            >Cancelar</button>
            <button id="btnAlt" className="btn btn-primary">
              Alterar
            </button>
          </div>
          
        </div>
      </form>
      
      <button className="btn btn-danger"
      onClick = {(e) => {
        //chama o metodo de remover cupom passando o cupom atual como parâmetro
        props.onApaga(cupom);
        //retorna o state cupom para vazio
        setCupom({});
        //previne que a página dê refresh
        e.preventDefault();
        //retorna a listagem de cupons
        history.push("/");
      }}
      >Excluir</button>
    </div>
    
  );
}

export default EditCupom;
