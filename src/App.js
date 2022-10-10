import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostsList from './components/PostList';
import { useState } from 'react';

function App() {

  const [post, setPost] = useState("");

  function filterPost(post) {
    setPost(post);
  }

  return (
    <div className="App">
      <NavBar />
      <div className='container mt-2'>
        <SearchBar post={post} filterPost={filterPost} />
        <PostsList post={post} />
      </div>
    </div>
  );
}

export default App;
