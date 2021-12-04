import React from 'react';
import { useHistory } from 'react-router-dom';

const divStyle = {
  color: 'white'
}

const aStyle = {
  textAlign: 'center'
}

const button = {
  marginTop: '10vh'
}
export default function TabelaCidade(props) {

  const history = useHistory()

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr
          className={i % 2 === 0 ? "par" : "impar"}
          key={item.cid_codigo} >
          <td> {item.cid_codigo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cid_descricao} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cid_estado} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cid_habitantes} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cid_economia} </td>
            <td
            style={{ textAlign: 'left' }}> {item.cid_anofundacao} </td>
          <td
            style={{ textAlign: 'left' }}> {item.reg_codigo} </td>

          <td
            id="editar"> <a
              className="btn btn-dark"
              href={props.chave + item.cid_codigo} > Editar </a></td>
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
            <th scope="col"> Nome da Cidade </th>
            <th scope="col"> Estado </th>
            <th scope="col"> Qtde Habitantes </th>
            <th scope="col"> Economia </th>
            <th scope="col"> Ano Fundação </th>
            <th scope="col"> Código do Região </th>
            <th scope="col" style={aStyle}><a href={props.chave + '0'} className="btn btn-dark btn-block " > Nova Cidade </a></th>
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