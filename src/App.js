import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './screens/Home';
import ShowProfile from './screens/ShowProfile';
import ShowLogin from './screens/ShowLogin';

function App() {
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [profile, setProfile] = useState([]);

  function doSearch(text) {
    setSearch(text);
  }
  // console.log(token);
  return (
    <div className="App">
      <NavBar token={token} profile={profile}/>
      <div className='container mt-2'>
        <Routes>
          <Route path="/" element={
            !token
            ?
            <ShowLogin setToken={setToken} setProfile={setProfile} />
            :
            <Home search={search} doSearch={doSearch}/>
          } />
          <Route path="/posts" element={<Home search={search} doSearch={doSearch}/>} />
          <Route path="/profile" element={<ShowProfile profile={profile} token={token} setToken={setToken}/>} />
          <Route path="/login" element={<ShowLogin setToken={setToken} setProfile={setProfile} />} />
        </Routes>        
      </div>
    </div>
  );
}

export default App;
