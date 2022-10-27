import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/filterCategory.css";

const FilterCategory = () => {
  const [categories, setcategories] = useState();

  useEffect(() => {
    const URL =
      "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setcategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const handleCategory = id => {

  }

  return (
    <article>
      <h3>Category</h3>
      <ul>
        <li onClick={handleCategory}>All products</li>
        {categories?.map((category) => (
          <li 
          key={category.id}
          onClick={() => handleCategory(category.id)}>{category.name}</li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
