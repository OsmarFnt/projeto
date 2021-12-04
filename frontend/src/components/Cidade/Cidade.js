import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaCidade from "../Tabelas/TabelaCidade";

const divStyle = {
  height: '100%',
  border: '3px ridge red',
  backgroundColor: 'rgba(0,59,61,0.5)',
  textAlign: 'center',
  color: 'white'
}

const rowStyle = {
  marginTop: '5vh'
}

const rowStyle2 = {
  marginTop: '5vh'
}
export default function Elenco() {

  const [cidade, setCidade] = useState([])
  useEffect(() => {
    urlApi.get('cidade')
      .then(response => response.data)
      .then(response => setCidade(response));
  }, [])

  return (
    <>
      <form>
        <div
          id="idCidade"
          style={divStyle}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={rowStyle}>
              <div
                className="col-md-12">
                <h1> Registro da Cidade </h1>
              </div>
            </div>
          </div>
          <div
            style={rowStyle2}>
            <TabelaCidade
              items={cidade}
              chave={'/cidade/'}
            />
          </div>
        </div>
      </form>
    </>
  )
}