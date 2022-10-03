import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostsList from './components/PostList';

function App() {
  return (
    <div className="App">      
      <NavBar />
      <div className='container mt-2'>
        <SearchBar />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
