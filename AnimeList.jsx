import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AnimeList = ({ data, setAnimeInfo, handleFav, children }) => {
  if (!data || data.length === 0) {
    return <p>No data found! Loading...</p>;
  }

  return (
    <div className="anime-list">
      {data.map((anime) => (
        <div className="card" key={anime.mal_id} onClick={() => setAnimeInfo(anime)}>
          <Link to="/anime-info">
            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
          </Link>
          <div>
            <h4>{anime.title}</h4>
          </div>
          <div className="overlay">
            <h4 style={{ textAlign: 'right' }}>{anime.title_japanese}</h4>
            <h3>SYNOPSIS:</h3>
            <div className="synopsis">
              <p>{anime.synopsis.trim()}</p>
            </div>
            <div className="favBtn" onClick={(e) => { e.stopPropagation(); handleFav(anime); }}>
              {children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

AnimeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    title_japanese: PropTypes.string,
    synopsis: PropTypes.string,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        large_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
  setAnimeInfo: PropTypes.func.isRequired,
  handleFav: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default AnimeList;
