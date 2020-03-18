import React from "react";


var divStyle = {
  display: "none"
};

function showNavBar(){
    if (divStyle.display == "none"){
      console.log(divStyle.display)
    }
}


const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" expand="lg">
      <a className="navbar-brand" href="#">
        SymReact !
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="true"
        aria-label="Toggle navigation"
        onClick={showNavBar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="navbar-collapse collapse show"
        id="navbarColor03"
        style={divStyle}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Clients
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Factures
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Inscription
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-success">
              Connexion !
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="btn btn-danger">
              Déconnexion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
