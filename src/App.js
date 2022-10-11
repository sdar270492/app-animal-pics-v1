import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostsList from './components/PostList';
import { useState } from 'react';
import Profile from './components/Profile';

function App() {

  const [post, setPost] = useState("");
  const [profile, setProfile] = useState(false);

  function filterPost(post) {
    setPost(post);
  }

  function showProfile(profile){
    setProfile(profile);
  }

  return (
    <div className="App">
      <NavBar showProfile = {showProfile}/>
      <div className='container mt-2'>
        {(profile
          ?
          <div> 
            <Profile /> 
          </div>
          :
          <div>
            <SearchBar post={post} filterPost={filterPost} />
            <PostsList post={post} />
          </div> 
        )}
      </div>
    </div>
  );
}

export default App;
