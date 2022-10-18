import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostsList from './components/PostList';
import { useState } from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
// import { getUserLogin } from './service/data-service';

function App() {

  // const [post, setPost] = useState("");
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // const [user, setUser] = useState([]);



  function doSearch(text) {
    setSearch(text);
  }

  function showProfile(profile) {
    setProfile(profile);
  }


  // getUserLogin()
  //   .then((data) => {
  //     setUser(data);
  //   })
  //   .catch((err) => {
  //     console.error(err.response.data.message);
  //   });

  return (
    <div className="App">
      <NavBar showProfile={showProfile} /*user={user}*/ />
      <div className='container mt-2'>
        {token ? (
          <>
            {(profile
              ?
              <div>
                <Profile /*user={user} *//>
              </div>
              :
              <div>
                <SearchBar search={search} doSearch={doSearch} />
                <PostsList search={search} />
              </div>
            )}
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </div>
  );
}

export default App;
