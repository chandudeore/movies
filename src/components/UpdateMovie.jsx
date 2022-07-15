import React, { memo } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./style/AddMovie.css";

function UpdateMovie() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const movie = {
    title,
    rating,
    category,
    price,
  };

  const putMovie = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/movie/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={putMovie}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter a Movie title"
          maxLength={30}
          minLength={3}
          required
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          placeholder="Enter a Rating of Movie"
          max={5}
          min={0}
          required
          onChange={(e) => setRating(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Enter a Category of Movie"
          maxLength={30}
          minLength={3}
          required
          onChange={(e) => setCategory(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter a Price of Movie"
          required
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <div>
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
}

export default memo(UpdateMovie);
