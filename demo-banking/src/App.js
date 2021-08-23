import { Route, Switch, HashRouter } from 'react-router-dom'
import { Dashboard } from './components/Dashboard';
import { SideBar } from './components/SideBar'
import { Accounts } from './components/Accounts';

function App() {
  function titleTag() {
    document.title = 'Admin demo'
  }
  titleTag();
  return (
    <HashRouter>
      <SideBar>
          <Switch>
            <Route path="/contas" component={ Accounts } />
            <Route exact path="/" component={ Dashboard } />
          </Switch>
      </SideBar>  
    </HashRouter>
  );
}

export default App;
