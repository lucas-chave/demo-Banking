import { Link } from 'react-router-dom'
import '../css/button.css'

function Button(props) {
  const { text, to } = props;
  return(
      <Link className="button" to={ to } >{ text }</Link>
  )
}

export default Button
