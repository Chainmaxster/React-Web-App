import React from 'react';
import PropTypes from 'prop-types';

const AnimeInfo = ({ info }) => {
  const {
    title,
    images: {
      jpg: { large_image_url: imgUrl },
    },
    rank,
    score,
    popularity,
    rating,
    status,
    source,
    duration,
  } = info;

  return (
    <div className="anime-info-container">
      <h3>{title}</h3>
      <img src={imgUrl} alt={title} className="anime-image" />
      <div className="anime-details">
        <p><strong># Rank:</strong> {rank}</p>
        <p><strong># Score:</strong> {score}</p>
        <p><strong># Rating:</strong> {rating}</p>
        <hr />
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Source:</strong> {source}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Popularity:</strong> {popularity}</p>
      </div>
    </div>
  );
};

// PropTypes for type checking
AnimeInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        large_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    rank: PropTypes.number,
    score: PropTypes.number,
    popularity: PropTypes.number,
    rating: PropTypes.string,
    status: PropTypes.string,
    source: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default AnimeInfo;
