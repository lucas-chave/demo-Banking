export async function fetchAPI()  {
  const API = await fetch('https://react-app-m2y.herokuapp.com/contacts')
  const apiJson = await API.json()
  return apiJson
}