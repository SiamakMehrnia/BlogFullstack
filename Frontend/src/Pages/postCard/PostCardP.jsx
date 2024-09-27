import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import axios from "axios";
import Swal from "sweetalert2";
import Lodaing from "../../Components/lodaing/lodaing";

const PostCardP = () => {
  const postId = useParams().id;
  const [postdata, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://blogfullstack-ok4a.onrender.com/posts/${postId}`)
      .then((response) => {
        setPostData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError("Daten konnten nicht geladen werden");
        setLoading(false);
      });
  }, [postId]);

  const deletButtonHandler = (postId) => {
    Swal.fire({
      title: "Are you sure?",

      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "yes, delete",
      cancelButtonText: "No, cancel!",
      cancelButtonColor:"#d33",
      confirmButtonColor:"#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your blog has been deleted.",
          icon: "success",
        });
        axios
          .delete(`https://blogfullstack-ok4a.onrender.com/posts/${postId}`)
          .then(() => {
            navigate("/");
          });
      }
    });
  };

  if (loading) {
    return <Lodaing />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Formatierung des Datums (nur wenn postdata vorhanden ist)
  const formattedDate = postdata
    ? new Date(postdata.created_at).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "";

  return (
    <>
      <NavBar />
      {postdata ? (
        <div className="card bg-gray-200 w-3/6 shadow-xl m-auto mt-8 col text-gray-900">
          <figure className="px-10 pt-10">
            {postdata.cover && (
              <img src={postdata.cover} className="rounded-xl" alt="Cover" />
            )}
          </figure>
          <div className="card-body items-center text-center">
            {postdata.title && <h2 className="card-title">{postdata.title}</h2>}
            {postdata.author && (
              <h4 className="card-title">{postdata.author}</h4>
            )}
            {postdata.content && <p>{postdata.content}</p>}
            <div className="card-actions">
              {formattedDate && <p>{formattedDate}</p>}
            </div>
            <div className="p-4 flex gap-2">
              <div>
                <button
                  onClick={() => deletButtonHandler(postId)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
              <div>
                <Link to={`/postEdit/${postId}`}>
                  <button className="btn btn-info">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Keine Daten verfügbar</p>
      )}
    </>
  );
};

export default PostCardP;
