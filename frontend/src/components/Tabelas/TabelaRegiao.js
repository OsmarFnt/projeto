import React from 'react';
import { useHistory } from 'react-router-dom';

const divStyle = {
  color: 'white'
}

const aStyle = {
  textAlign: 'center'
}

const button = {
  marginTop: '8vh'
}

export default function TabelaRegiao(props) {

  const history = useHistory()
  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr
          className={i % 2 === 0 ? "par" : "impar"}
          key={item.reg_codigo} >
          <td> {item.reg_codigo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.reg_descricao} </td>
          <td
            style={{ textAlign: 'left' }}> {item.reg_sigla} </td>
          <td
            style={{ textAlign: 'left' }}> {item.reg_areakm2} </td>
          <td
            style={{ textAlign: 'left' }}> {item.reg_valorpib} </td>

          <td
            id="editar"> <a
              className="btn btn-dark"
              href={props.chave + item.reg_codigo} > Editar </a></td>
        </tr>
      )
    })
  }

  return (
    <div
      className="container-fluid">
      <table id="tabela"
        className="table table-lg"
        style={divStyle}>
        <thead id="cabecalho_rel">
          <tr
            style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome da Região </th>
            <th scope="col"> Sigla </th>
            <th scope="col"> Area </th>
            <th scope="col"> PIB </th>
            <th scope="col" style={aStyle}><a href={props.chave + '0'} className="btn btn-dark btn-block " > Nova Região </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
      <div
        className="col-md-12 text-center mb-3">
        <button
          type="submit"
          className="btn btn-dark btn-lg"
          onClick={() => history.push('/')}
          style={button}> Início </button>
      </div>
    </div>
  )
}