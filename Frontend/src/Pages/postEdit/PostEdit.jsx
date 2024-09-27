import { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const PostEdit = (props) => {
  const [postData, setPostData] = useState({});
  const postId = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://blogfullstack-ok4a.onrender.com/posts/${postId}`)
      .then((response) => setPostData(response.data[0]));
  }, []);

  const formHandler = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const editBlogHandler = () => {
    axios.put(
      `https://blogfullstack-ok4a.onrender.com/posts/${postId}`,
      postData
    );
    Swal.fire({
      title: "Blog Updated",
      text: "Your blog has been updated",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="max-w-2xl m-auto py-4 text-gray-900 ">
        <div className="flex flex-col py-4">
          <label className="my-4">
            <b>Author</b>
          </label>
          <input
            name="author"
            onChange={formHandler}
            value={postData.author}
            type="text"
            placeholder="type author name"
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4">
            <b>Title</b>
          </label>
          <input
            name="title"
            onChange={formHandler}
            value={postData.title}
            type="text"
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4">
            <b>Content</b>
          </label>
          <input
            name="content"
            onChange={formHandler}
            value={postData.content}
            type="text"
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4"><b>Image</b></label>
          <input
            name="cover"
            onChange={formHandler}
            value={postData.cover}
            type="text"
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4"><b>Date</b></label>
          <input
            name="data"
            onChange={formHandler}
            value={postData.data}
            type="data"
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <button onClick={editBlogHandler} className="btn text-gray-900">
          Update Blog
        </button>
      </div>
    </>
  );
};

export default PostEdit;
