import React from "react"
import urlApi from '../../service/api';
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

export default function CidadeEditar() {

  const history = useHistory()

  let idBoolean = false;

  const [codigoC, setCodigoC] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [estado, setEstado] = useState('');
  const [habitantes, setHabitantes] = useState('');
  const [economia, setEconomia] = useState('');
  const [anofundacao, setAnofundacao] = useState('');
  const [regCodigo, setRegCodigo] = useState('');
  const [checked, setChecked] = useState(false);

  const { id } = useParams();

  function IfCrud() {
    console.log('Id Cidade: ' + id + ' - ' + idBoolean)
    if (id === 0) {
      idBoolean = true;
    } else {
    }
  }

  useEffect(() => {
    async function getCidade() {
      console.log('Cidade: ' + id + ' - ' + idBoolean)
      if (id == 0) {
        setChecked(true);
        console.log('Inclusão de novo registro!')
      } else {
        const { data } = await urlApi.get('/cidade/' + id);
        console.log(data)

        setCodigoC(data[0].cid_codigo);
        setDescricao(data[0].cid_descricao);
        setEstado(data[0].cid_estado);
        setHabitantes(data[0].cid_habitantes);
        setEconomia(data[0].cid_economia);
        setAnofundacao(data[0].cid_anofundacao);
        setRegCodigo(data[0].reg_codigo);

        console.log(data[0].cid_descricao)
      }
    }
    IfCrud();
    getCidade();
  }, []);

  async function handleCidade(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("Dados Form: " + data.cid_estado);

    try {
      if (descricao.length === 0) {
        alert('Insira um nome válido')
      } else {
        console.log("Codigo Cidade: ", id)
        if (id == 0) {
          console.log("Inclusão de Registro!")
          await urlApi.post('cidade', data)
            .then(response => alert("Inserção Realizada com Sucesso!"))
        } else {
          console.log("Alteração de Registro! ", id)
          await urlApi.put('/cidade/' + id, data)
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
          onSubmit={handleCidade}
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
                name="cid_codigo"
                value={codigoC}
                onChange={e => setCodigoC(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cid_descricao" style={label}> Nome Cidade </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cid_descricao"
                value={descricao}
                onChange={e => setDescricao(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cid_estado" style={label}> Estado </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cid_estado"
                value={estado}
                onChange={e => setEstado(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cid_habitantes" style={label}> Habitantes </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cid_habitantes"
                value={habitantes}
                onChange={e => setHabitantes(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cid_economia" style={label}> Economia Principal </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cid_economia"
                value={economia}
                onChange={e => setEconomia(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cid_anofundacao" style={label}> Ano Fundação </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cid_anofundacao"
                value={anofundacao}
                onChange={e => setAnofundacao(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="reg_codigo" style={label}> Código Região </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="reg_codigo"
                value={regCodigo}
                onChange={e => setRegCodigo(e.target.value)} />
            </div>
          </div>
          <div
            className="row">
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                onClick={() => history.push('/cidade')}
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