import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "./Button";
import { Heading } from "./Heading";
import '../css/aside.css'

export function SideBar({ children }) { 
  return(
    <div className="aside">
      <div className="sub-container">
        <div className="container-aside">
          <Heading text="Demo Banking" />
          <div className="buttons">
            <Button text="Home" to="/" />
            <Button text="Contas" to="/contas" />
          </div>
        </div>
      </div>
      <div className="sub-container-dashboard">
        <div className="dashboard">
          {children}
        </div>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};
