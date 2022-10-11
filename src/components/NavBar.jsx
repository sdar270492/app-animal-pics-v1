function NavBar({showProfile}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-brand"
            onClick={()=>{showProfile(false)}}
            >
          <i className="bi bi-shop"></i> App Animal Pics
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <div className="" 
          onClick={()=>{showProfile(true)}}
          >
          <img src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png" width="40" height="40" alt="logo" />
        </div>
      </div>
    </nav>


  );
}

export default NavBar;