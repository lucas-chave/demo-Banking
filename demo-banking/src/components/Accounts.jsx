import { fetchAPI } from '../service/fetch'
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

function Accounts() {

  const [data, setData] = useState([])

  const result = async () => {
    try {
      const response = await fetchAPI()
      console.log(response.data);
      setData(response.data)
    } catch{
      console.log('err');
    }
  }

  useEffect(() => {
    result()
  }, []) 
 
  return(
    <Table hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
      {data.length ? data.map((user, index) => {
        const { email, name, birthday } = user.attributes
         return (
          <tr key={index}>
            <th scope="row">{user.id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{birthday}</td>
          </tr>
      )}) : 'carregando...'}
      </tbody>
    </Table>
  )
}

Table.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  // Custom ref handler that will be assigned to the "ref" of the inner <table> element
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ])
  };

export default Accounts
