import React from "react";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Regiao from "../Regiao/Regiao";
import RegiaoEditar from "../Regiao/RegiaoEditar";
import Cidade from "../Cidade/Cidade";
import CidadeEditar from "../Cidade/CidadeEditar";

const divStyle = {
  minHeight: '73.8vh',
  border: '1px ridge black',
  marginTop: '0.5vh',
  paddingTop: '2vh',
  backgroundColor: 'rgba(0,59,61,0.5)',
  fontSize: '20pt'
}

export default function AreaDados() {
  return (
    <>
      <div
        style={divStyle}>
        <Switch>
          <Route
            exact path="/regiao"
            component={Regiao}></Route>
          <Route
            exact path="/regiao/:id"
            component={RegiaoEditar}></Route>
          <Route
            exact path="/cidade"
            component={Cidade}></Route>
          <Route
            exact path="/cidade/:id"
            component={CidadeEditar}></Route>
        </Switch>
      </div>
    </>
  )
}
