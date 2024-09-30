import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Post from "./Pages/Post/Post"
import PostCardP from "./Pages/postCard/PostCardP";
import PostEdit from "./Pages/PostEdit/PostEdit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/postCard/:id" element={<PostCardP />} />
        <Route path="/postEdit/:id" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
