import { useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import "./Post.css";
import axios from "axios";
import Swal from "sweetalert2";

const Post = () => {
  const [form, setForm] = useState({});
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
    axios.post("localhost:8000",form)
    .then((response)=>{
        if(response.status==200){
            Swal.fire({
                title: "Article Added",
                text: "Article Added Successfully",
                icon: "success",
                timerProgressBar:true,
                timer:2000,
                showConfirmButton:false,
            })
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
  })
  resatFormData
}

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NavBar />
      <div className="max-w-2xl m-auto py-4">
        <div className="flex flex-col py-4">
          <label className="my-4">
            <b>Author</b>
          </label>
          <input
            name="author"
            onChange={formHandler}
            value={form.author}
            type="text"
            placeholder="type author name"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4">
            <b>Title</b>
          </label>
          <input
            name="title"
            onChange={formHandler}
            value={form.title}
            type="text"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4">
            <b>Content</b>
          </label>
          <input
            name="content"
            onChange={formHandler}
            value={form.content}
            type="text"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4">Cover</label>
          <input
            name="cover"
            onChange={formHandler}
            value={form.cover}
            type="text"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>

        <div className="flex flex-col py-4">
          <label className="my-4">Date</label>
          <input
            name="data"
            onChange={formHandler}
            value={form.data}
            type="data"
            placeholder=""
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <button onClick={addArticleHandler} className="btn">Add Bloge</button>
      </div>
    </>
  );
};

export default Post;
