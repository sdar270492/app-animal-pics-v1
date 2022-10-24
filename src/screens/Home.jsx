import SearchBar from '../components/SearchBar';
import PostsList from '../components/PostList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home({ search, doSearch }) {
    const userIsInactive = localStorage.getItem("token");
    const navigate = useNavigate();

  useEffect(() => {
    if (!userIsInactive) {
      navigate("/login");
    }
  }, [userIsInactive]);

    return (
        <div>
            <SearchBar search={search} doSearch={doSearch} />
            <PostsList search={search} />
        </div>
    );
}

export default Home;