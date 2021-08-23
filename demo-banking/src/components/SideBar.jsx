import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import Heanding from "./Heading";
import '../css/aside.css'

export function SideBar({ children }) { 
  return(
    <aside className="aside">
      <div className="container-aside">
        <Heanding text="Demo Banking" />
        <div className="buttons">
          <Button text="Home" to="/" />
          <Button text="Contas" to="/contas" />
        </div>
      </div>
      <div className="dashboard">
        {children}
      </div>
    </aside>
  );
}

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};
