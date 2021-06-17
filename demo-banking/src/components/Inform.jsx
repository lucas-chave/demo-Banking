import '../css/inform.css'

function Inform(props) {
  const { text, data } = props;
  return(
    <div className="container-inform">
        <h4>{text}</h4>
        <div>{data}</div>
    </div>
  )
}

export default Inform
