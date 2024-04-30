import React from "react";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  return (
    <div>
      <Link to={route}>
        <img src={imageUrl} alt={title} />
      </Link>
      <div>
        <Link to={route}>
          <h2>{title}</h2>
        </Link>
        <Link to={route}>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
