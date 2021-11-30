import React, { useState, useEffect } from 'react';
import NavBar from './componentes/navbar';
import Cupons from './componentes/cupons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCupom from './componentes/addCupom';
import EditCupom from './componentes/editCupom';

function App(props) {
  // estado
  let t = JSON.parse(localStorage.getItem('cupons'));
  if (!t) t = [];
  const [cupons, setCupons] = useState(t);

  // funções de tratamento de eventos

  //Adicioa um novo cupom a listagem
  const adicionaCupom = (t) => setCupons([...cupons, t]);
  
  //Encontra o cupom alterado, gera uma nova lista e altera
  const alteraCupom = (idCupom, cupom) => {
    const i = cupons.findIndex((c) => c.id === idCupom);
    const novaLista = [...cupons];
    novaLista[i] = cupom;
    setCupons(novaLista);
  };

  //Busca um cupom na lista de cupons cadastrados pelo id
  const getCupom = (idCupom) => {
    let i = cupons.findIndex((c) => c.id === idCupom);
    return cupons[i];
  }

  //Remove um cupom
  const apagaCupom = (t) =>
    setCupons(cupons.filter((tarefa) => tarefa !== t));

  // atualização
  useEffect(() => localStorage.setItem('cupons', JSON.stringify(cupons)));

  // interface
  // Foi inserido os componentes de roteamento a fim de redirecionar o para as rotas de AdiconarCupom e EditarCupom
  // <AddCupom onAdiciona={adicionaTarefa}/> -> Envia como propriedade a referência para adicionar novo cupom
  //<EditCupom onAltera={alteraCupom}
  //          getCupom = {getCupom} 
  //          onApaga={apagaCupom}
  //         /> ->  Envia como propriedade a referência para encontrar, alterar e excluir um cupom
  //
  //
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/add">
            <AddCupom onAdiciona={adicionaCupom}/>
          </Route>
          <Route path="/edit/:id">
            <EditCupom onAltera={alteraCupom}
            getCupom = {getCupom} 
            onApaga={apagaCupom}
            />
          </Route>
          <Route path="/">
            <Cupons
              cupons={cupons}
              onAdiciona={adicionaCupom}
            />
          </Route>
          
        </Switch>
      
      </Router>
      
    </React.Fragment>
  );
}

export default App;
