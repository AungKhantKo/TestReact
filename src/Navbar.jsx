import React from "react";
import './Navbar.css'

class Navbar extends React.Component{
  render(){
    return(
      <div className="Dark-nav">
        {this.props.children}
      </div>
    )
  }
}

export default Navbar;