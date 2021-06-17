import Button from "./Button";
import Heanding from "./Heading";

function SideBar(props) {
  const { children } = props; 
  return(
      <aside className="aside">
        <Heanding text="Demo Banking" />
        <Button text="Home" to="/" />
        <Button text="Contas" to="/contas" />
        {children}
      </aside>
  );
}

export default SideBar
