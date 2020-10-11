import React from "react";

function Header( props) {
    return(
        <div className="App-header">
        <a className="App-link" toggleTheme={props.toggleTheme} onClick={props.toggleTheme.bind(this,'Login')}>Login</a>
        <a className="App-link" onClick={props.toggleTheme.bind(this,'Addfriend')}>Add</a>
        <a className="App-link" onClick={props.toggleTheme.bind(this,'Register')}>View</a>
        <a className="App-link" onClick={props.toggleTheme.bind(this,'Main')}>Main</a>
        </div>
    )
}

export default Header;