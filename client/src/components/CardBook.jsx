import React from "react";
import { Link } from "react-router-dom";

const CardTrack = ({ id, cover_url, title, authors }) => {
  return (
    <Link to={`/book/${id}`}>
      <img src={cover_url} alt={title} className="rounded-xl w-full" />
      <h6 className="text-md sm:text-lg font-bold mt-3 text-white">{title}</h6>
      <p className="text-xs md:text-sm font-normal text-white">{authors[0]}</p>
    </Link>
  );
};

export default CardTrack;
