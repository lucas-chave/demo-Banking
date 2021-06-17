import Graphic from "./Graphic";
import Inform from "./Inform";
import '../css/dashboard.css'

function Dashboard() {
  return(
    <div className="container">
      <div className="informs">
        <div className="containers-informs">
          <Inform text="Contas PJ" data="2" />
        </div>
        <div className="containers-informs">
          <Inform text="Contas PF" data="2" />
        </div>
      </div>
      <Graphic />
    </div>
  )
}

export default Dashboard