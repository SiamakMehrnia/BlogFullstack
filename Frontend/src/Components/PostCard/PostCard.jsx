import { Link } from "react-router-dom"
import "./PostCard.css"

const PostCard = (props) => {
    return (
        <>
        <div className="card">

        <div className="card lg:card-side bg-gray-200 shadow-xl m-5  h-76 text-gray-900 max-w-96">
  <figure>
    <img className="object-fill w-96 h-72 "
      src={props.cover}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.author}</p>
    <div className="card-actions justify-end">
      <Link to={`/postCard/${props.id}`}>
      <button className="btn btn-primary">More</button>
      </Link>
    </div>
  </div>
</div>
      </div>
        
        </>
    )
}

export default PostCard
