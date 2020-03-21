import React, {useContext} from "react";
import AuthAPI from "../services/authAPI";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

// Code perso :
var divStyle = {
  display: "none"
};
function showNavBar() {
  if (divStyle.display == "none") {
    console.log(divStyle.display);
  }
}

const Navbar = ({ history }) => {

  const { isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

  const handleLogout = () => {
    AuthAPI.logout();
    setIsAuthenticated(false);
    toast.info("Vous êtes désormais déconnecté  😁");
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" expand="lg">
      <NavLink className="navbar-brand" to="/">
        SymReact !
      </NavLink>
      <button
        className="navbar-toggler"
        to="/"
        e="button"
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
            <NavLink className="nav-link" to="/customers">
              Clients
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/invoices">
              Factures
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {(!isAuthenticated && (
            <>
              <li className="nav-item">
                <NavLink href="#" className="nav-link" to="/register">
                  Inscription
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#" className="btn btn-success" to="/login">
                  Connexion !
                </NavLink>
              </li>
            </>
          )) || (
            <li className="nav-item">
              <button onClick={handleLogout} href="" className="btn btn-danger">
                Déconnexion
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
