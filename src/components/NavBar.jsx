function NavBar({showProfile/*, user*/}) {

  // console.log(user.avatar);
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
          {/*!user.avatar
          ?*/
          <img src="https://p.kindpng.com/picc/s/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png" width="40" height="40" alt="logo" />
          /*:
          <img className="rounded-circle" src={user.avatar} width="40" height="40" alt="logo" />          
          */
          }
        </div>
      </div>
    </nav>


  );
}

export default NavBar;