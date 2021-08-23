export async function fetchAPI()  {
  const result = await ((await fetch('https://react-app-m2y.herokuapp.com/contacts')).json())
  return result;
}
