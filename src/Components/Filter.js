import "./Filter.css";
import { useState } from "react";

const Filter = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filterData = props.filterData;
  const category = props.category;
  const setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
    setSelectedCategory(title);
  }

  return (
    <div className="filtbtn">
      {filterData.map((data) => (
        <button
          onClick={() => filterHandler(data.title)}
          className={`allbtns ${
            selectedCategory === data.title ? "selected" : ""
          }`}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
