import React from "react"
import './Regiao.css';

import urlapi from "../../service/api.js"
import Tabela from "../Tabelas/TabelaRegiao";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Regiao() {
  const [regiao, setRegiao] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('regiao')
      .then(response => setRegiao(response.data));
  }, []
  )

  return (
    <>
        <div id="idRegiao" className="regiao">
          <div id="corpo_rel">
            <legend> Registros de Regiões Cadastradas</legend>
            <Link to="/regiao/0" value={'I'}>incluir Nova Regiao</Link>

            <div>

              <Tabela
                items={regiao}
                chave={'/regiao/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Regiao;

