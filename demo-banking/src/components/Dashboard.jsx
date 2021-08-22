import Graphic from "./Graphic";
import Inform from "./Inform";
import '../css/dashboard.css';
import { fetchAPI } from '../service/fetch';
import { useEffect, useState } from "react";



function Dashboard() {
  
  const [data, setData] = useState([]);
  
  const result = async () => {
    try {
      const response = await fetchAPI();
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    result();
  }, []);

  return(
    <div className="container">
      <div className="informs">
        <div className="containers-informs">
          <Inform text="Contas PJ" data={data.length ? data.length : 0 } />
        </div>
        <div className="containers-informs">
          <Inform text="Contas PF" data={ data.length ? data.length - 20 : 0 } />
        </div>
      </div>
      <Graphic />
    </div>
  );
}

export default Dashboard;
