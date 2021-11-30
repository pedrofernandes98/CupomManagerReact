import React from 'react';

const NavBar = () => {
  //Adiciona margin a esquerda
  const marginLeft = {
    marginLeft: "1rem",
  };

  //Interface da barra de navegação
  return (
    <nav className="navbar navbar-dark bg-dark" >
      <span className="navbar-brand" style={marginLeft}>CupomManager</span>
    </nav>
  );
};

export default NavBar;
