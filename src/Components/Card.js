import { toast } from "react-toastify";
import "./Card.css";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  const desc = `${course.description.substring(0, 200)}...`;
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;

  function clickHandler() {
    //when toast is liked
    if (likedCourses.includes(course.id)) {
      setlikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      //all empty
      if (likedCourses.length === 0) {
        setlikedCourses([course.id]);
      }

      //1 2 liked pade hai lekin ye course nay hai usse include krne ke liye
      else {
        setlikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="card-comp">
      <div className="card-img">
        <img src={course.image.url} alt={"hello"} />
      </div>

      <div className="icons">
        <button onClick={clickHandler} className="icon">
          { likedCourses.includes(course.id) ? (
            <FcLike />
          ) : (
            <FcLikePlaceholder />
          ) }
        </button>
      </div>

      <div className="inner-container">
        <h2 className="title">{course.title}</h2>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
