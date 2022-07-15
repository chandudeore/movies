import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieError, movieLoad } from "../Redux/action";
import { Link } from "react-router-dom";
import UpdateMovie from "./UpdateMovie";

export default function ShowMvoie() {
  const [movies, setMovie] = useState([]);
  const [update, setUpdate] = useState([]);
  //console.log(movies);
  const dispatch = useDispatch();

  const getMovieData = () => {
    dispatch(movieLoad());
    fetch("http://localhost:5000/movie")
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch(() => dispatch(movieError()));
  };

  const getId = (id) => {
    fetch(`http://localhost:5000/movie/delete/${id}`, {
      method: "DELETE",
    });
    getMovieData();
  };

  useEffect(() => {
    getMovieData();
  }, [getId]);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          {movies.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.title}</td>
                  <td>{item.rating}</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to={`/update/${item._id}`}>Update</Link>
                  </td>
                  <td>
                    <button onClick={() => getId(item._id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
