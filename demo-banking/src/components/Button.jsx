import { Link } from 'react-router-dom'

function Button(props) {
  const { text, to } = props;
  return(
      <Link to={ to } >{ text }</Link>
  )
}

export default Button
