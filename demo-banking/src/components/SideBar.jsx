import Button from "./Button";
import Heanding from "./Heading";
import '../css/aside.css'

function SideBar(props) {
  const { children } = props; 
  return(
      <aside className="aside">
        <div className="container-aside">
          <Heanding text="Demo Banking" />
          <div className="buttons">
            <Button text="Home" to="/" />
            <Button text="Contas" to="/contas" />
          </div>
        </div>
        {children}
      </aside>
  );
}

export default SideBar
