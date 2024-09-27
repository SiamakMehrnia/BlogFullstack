import { useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import PostCard from "../../Components/PostCard/PostCard";
import axios from "axios";
import { useState } from "react";
import Lodaing from "../../Components/lodaing/lodaing";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://blogfullstack-ok4a.onrender.com/posts").then((response) => {setPosts(response.data); setLoading(false)});
    
  }, []);
if(loading){
  return <Lodaing />
}
  return (
    <>
      <NavBar />
      <h1 className="p-4 text-4xl ml-10 text-gray-900">Blog Page</h1>
      <div className="flex flex-wrap m-auto">

      {posts.map((post) => (
        <div key={post.id}>
        <PostCard {...post}  />
        </div>
        ))}


      </div>
    </>
  );
};

export default Home;
