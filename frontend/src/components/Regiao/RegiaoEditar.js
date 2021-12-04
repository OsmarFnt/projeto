import React from "react"
import urlapi from "../../service/api.js"

import { useEffect, useState } from 'react';

import { useParams, useHistory } from "react-router-dom";

const label = {
  color: 'white'
}

const h1 = {
  color: 'white'
}


const button = {
  marginTop: '10vh'
}

const formStyle = {
  marginTop: '5vh'
}

const inputStyle = {
  marginTop: '2.5vh'
}

export default function RegiaoEditar() {
  
    const history = useHistory();  
  
    let idBoolean = false;   

    const [codigo, setCodigo] = useState(0);
    const [nome, setDescricao] = useState('');
    const [sigla, setSigla] = useState('');
    const [areakm2, setArea] = useState('');
    const [pib, setPib] = useState('');

    const [checked, setChecked] = useState(false);
 

    const { idRegiao } = useParams();

    function IfCrud() {
        console.log('Id Regiao: ' + idRegiao + ' - ' + idBoolean)
        if (idRegiao === 0) {
            idBoolean = true;
        } else {
        }
    }

    useEffect(() => {
        async function getRegiao() {
            console.log('Regiao: ' + idRegiao + ' - ' + idBoolean)
            if (idRegiao == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                const { data } = await urlapi.get('/regiao/' + idRegiao);
                console.log(data)

                setCodigo(data[0].reg_codigo);
                setDescricao(data[0].reg_descricao);
                setSigla(data[0].reg_sigla);
                setArea(data[0].reg_areakm2);
                setPib(data[0].reg_valorpib);
                
                console.log(data[0].reg_descricao)
            }
        }
        IfCrud();
        getRegiao();
    }, []);

    async function handleRegiao(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.reg_descricao);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Regiao: ",idRegiao)
                if (idRegiao == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('regiao', data)
                      .then(response => alert("Inserção Realizada com Sucesso!"))
                } else {
                    console.log("Alteração de Registro! ",idRegiao)
                    await urlapi.put('/regiao/' + idRegiao, data)
                      .then(response => alert("Alteração Realizada com Sucesso!"))
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
      <>
        <div >
          <form
            onSubmit={handleRegiao}
            className="container-fluid" style={formStyle}>
            <div
              className="row">
              <div
                className="col-md-12 text-center">
                <h1
                  style={h1}> Formulário de Cadastro </h1>
              </div>
              <div
                className="form-group col-md-6 mb-3"
                style={inputStyle}>
                <label
                  style={label}> Código </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="reg_codigo"
                  value={codigo}
                  onChange={e => setCodigo(e.target.value)}
                />
              </div>
              <div
                className="form-group col-md-6 mb-3" style={inputStyle}>
                <label
                  for="reg_descricao" style={label}> Nome Regiao </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="reg_descricao"
                  value={nome}
                  onChange={e => setDescricao(e.target.value)} />
              </div>
              <div
                className="form-group col-md-6 mb-3" style={inputStyle}>
                <label
                  for="reg_sigla" style={label}> Sigla </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="reg_sigla"
                  value={sigla}
                  onChange={e => setSigla(e.target.value)} />
              </div>
              <div
                className="form-group col-md-6 mb-3" style={inputStyle}>
                <label
                  for="reg_areakm2" style={label}> Area Km² </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="reg_areakm2"
                  value={areakm2}
                  onChange={e => setArea(e.target.value)} />
              </div>
              <div
                className="form-group col-md-6 mb-3" style={inputStyle}>
                <label
                  for="reg_valorpib" style={label}> Valor Pib </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="reg_valorpib"
                  value={pib}
                  onChange={e => setPib(e.target.value)} />
              </div>
            </div>
            <div
              className="row">
              <div
                className="col-md-6 text-center">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg"
                  onClick={() => history.push('/regiao')}
                  style={button}> Voltar </button>
              </div>
              <div
                className="col-md-6 text-center">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg"
                  style={button}> Salvar </button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
}
