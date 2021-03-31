import data from "./data/data.json";
function NavBar() {
  return (
    <div>
      <div className="container-sm">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            362 E. Main Street Lexington, Kentucky 859-309-3039
          </li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>
          <li className="nav-item">
            <button className="btn btn-outline-success" type="submit">
              Reserve
            </button>

            <img src={data.links[0].src}></img>
            <img src={data.links[1].src}></img>
            <img src={data.links[2].src}></img>
          </li>
        </ul>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Chocobo Crusines
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Breakfast
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lunch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      appetizers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Main Entrees
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;