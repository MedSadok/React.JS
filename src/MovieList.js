import React, { Component } from "react";
import Loading from "./Loading";

const movie = [
  {
    id: "1",
    title: "The Dark Knight Rises",
    date: "2012",
    url: "https://www.imdb.com/title/tt1345836/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: "2",
    title: "The Dark Knight",
    date: "2008",
    url: "https://www.imdb.com/title/tt0468569/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: "3",
    title: "The Revenant",
    date: "2016",
    url: "https://www.imdb.com/title/tt1663202/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: "4",
    title: "The Wolf Of Wall street",
    date: "2013",
    url: "https://www.imdb.com/title/tt0993846/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
];

const MovieCard = props => {
  const movies = props.movie;

  return (
    <div className="movie-card">
      <a href={movies.url}>
        <img src={movies.img} alt="" />
      </a>
      <div className="detail">
        <span id="movie-title" key={movies.id}>
          {movies.title}
        </span>
        <span id="release-date" key={movies.id}>
          {movies.date}
        </span>
      </div>
    </div>
  );
};

class MovieList extends Component {
  render() {
    return (
      <div className="MovieCard">
        {movie.map((card, index) => (
          <MovieCard movie={card} key={index} />
        ))}
        ;
      </div>
    );
  }
}

export default Loading(MovieList);
