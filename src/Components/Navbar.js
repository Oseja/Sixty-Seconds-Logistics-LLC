import React, { Component } from 'react'
import '../All-CSS/Navbar.css'
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData'
import logo from '../logo.svg'

export default class Navbar extends Component {
  
    state ={
      clicked: false,
    };
   handleMenuClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }    
    handleDarkModeClick = () => {
      this.props.toggleMode();
    };
    render() {
    // const { toggleMode } = this.props;
    const { mode } = this.props;
    return (
      <>
     
        <nav className={`NavbarItems navbar-${mode} bg-${mode}`}>
        <Link exact to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <div className={'modeIcon '} onClick={this.handleDarkModeClick}>
              <i className={mode === 'light' ? "fa-solid fa-sun":"fa-solid fa-moon"}></i>
            </div>
        
        <div className="menu-icons" onClick={this.handleMenuClick }>
            <i className={`${this.state.clicked ? "fas fa-times" : "fas fa-bars"} ${mode === 'dark' ? 'dark-mode-text' : ''}`}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item,index)=>{
        return(
            <li key={index}>
                <Link exact to={item.url} 
                className={`${item.cName} ${mode === 'dark' ? 'dark-mode-text' : ''}`}>
                  <i className={item.icon}></i>{item.title}</Link>
                </li>
        );
        })}
              
        </ul>
        </nav> 
      </>
    )
  }
}
