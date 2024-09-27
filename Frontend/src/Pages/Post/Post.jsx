import { useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import "./Post.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [form, setForm] = useState({});
  const navigate=useNavigate()
  const resatFormData = () => {
    setForm({
      author: "",
      title: "",
      content: "",
      cover: "",
      date: "",
    });
  };
  const addArticleHandler=()=>{
    axios.post("https://blogfullstack-ok4a.onrender.com/posts",form)
    .then((response)=>{
        if(response.status==201){
            Swal.fire({
                title: "Article Added",
                text: "Article Added Successfully",
                icon: "success",
                timerProgressBar:true,
                timer:2000,
                showConfirmButton:false,
            })
            navigate("/")
        }
    })
    .catch((error)=>{
        Swal.fire({
            title: "Error",
            text: "Error Adding Article",
            icon: "error",
            timerProgressBar:true,
            timer:2000,
            showConfirmButton:false,
        })
             .catch((error) => {
        setError("Daten konnten nicht geladen werden");
        setLoading(false);
      });
  })
  resatFormData
}

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NavBar />
      <div className="max-w-2xl m-auto py-4 text-gray-900">
        <div className="flex flex-col py-4">
          <label className="my-4">
            <b>Author</b>
          </label>
          <input
            name="author"
            onChange={formHandler}
            value={form.author}
            type="text"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4 text-gray-900">
          <label className="my-4">
            <b>Title</b>
          </label>
          <input
            name="title"
            onChange={formHandler}
            value={form.title}
            type="text"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4 text-gray-900 ">
          <label className="my-4">
            <b>Content</b>
          </label>
          <input
            name="content"
            onChange={formHandler}
            value={form.content}
            type="text"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4 text-gray-900">
          <label className="my-4"><b>Image</b></label>
          <input
            name="cover"
            onChange={formHandler}
            value={form.cover}
            type="text"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>

        <div className="flex flex-col py-4 text-gray-900">
          <label className="my-4"><b>Data</b></label>
          <input
            name="data"
            onChange={formHandler}
            value={form.data}
            type="data"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs text-gray-900"
          />
        </div>
        <button onClick={addArticleHandler} className="btn text-gray-900">Add Bloge</button>
      </div>
    </>
  );
};

export default Post;
