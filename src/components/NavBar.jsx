import { Link } from 'react-router-dom';

function NavBar({ token,  profile}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          three pics
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          {!token ?
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
              </li>
            </ul>
            :
            <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link className="nav-link active" to="/posts">Posts</Link>
              </li>
            </ul>

            <div>
              <Link to="/profile">
                <img className="rounded-circle" src={profile.avatar} width="40" height="40" alt="logo" />
              </Link>
            </div>
            </>
          }
        </div>
      </div>
    </nav>


  );
}

export default NavBar;