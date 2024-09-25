import { useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import PostCard from "../../Components/PostCard/PostCard";
import axios from "axios";
import { useState } from "react";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("").then((response) => setPosts(response.data.data));
  }, []);
  return (
    <>
      <NavBar />
      <h1 className="p-4 text-4xl">Blog Page</h1>
      <div className="m-10 flex flex-wrap">
        <div>
        <PostCard/>

        </div>
        <div>
        <PostCard/>

        </div>
        <div>
        <PostCard/>

        </div>
      </div>
    </>
  );
};

export default Home;

{/* {posts.map((post) => (
  <div key={post.id}>
  <PostCard key={post.id} post={post} />
  </div>
  ))} */}