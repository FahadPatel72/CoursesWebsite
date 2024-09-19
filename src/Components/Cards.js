import "./Cards.css";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  const [likedCourses, setlikedCourses] = useState([]);
  let category = props.category;
  let courses = props.courses;

  function fetchCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) =>
        array.forEach((coursedata) => {
          allCourses.push(coursedata);
        })
      );
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="allcards">
      {fetchCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setlikedCourses={setlikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
