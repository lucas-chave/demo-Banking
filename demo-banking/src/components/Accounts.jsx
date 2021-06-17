import { fetchAPI } from '../service/fetch'
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

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
    <Table>
      <thead>
        <tr>
          <th>#</th>
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

export default Accounts
