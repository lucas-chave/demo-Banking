import Graphic from "./Graphic";
import Inform from "./Inform";

function Dashboard() {
  return(
    <div>
      <Inform text="Contas PJ" data="2" />
      <Inform text="Contas PF" data="2" />
      <Graphic />
    </div>
  )
}

export default Dashboard