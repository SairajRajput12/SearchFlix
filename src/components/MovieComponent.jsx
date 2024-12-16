import React from 'react';
import Button from '../UI/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieComponent = () => {
  const location = useLocation(); 
  const movie = location.state.movieData; 
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1);
  }


  return (
    <div style={styles.container}>
      <div style={styles.posterContainer}>
        <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
      </div>
      <div style={styles.detailsContainer}>
        <h1 style={styles.title}>
          {movie.Title} <span style={styles.year}>({movie.Year})</span>
        </h1>
        <p style={styles.detail}><strong>Genre:</strong> {movie.Genre}</p>
        <p style={styles.detail}><strong>Director:</strong> {movie.Director}</p>
        <p style={styles.detail}><strong>Writer:</strong> {movie.Writer}</p>
        <p style={styles.detail}><strong>Actors:</strong> {movie.Actors}</p>
        <p style={styles.detail}><strong>Plot:</strong> {movie.Plot}</p>
        <p style={styles.detail}><strong>Language:</strong> {movie.Language}</p>
        <p style={styles.detail}><strong>Country:</strong> {movie.Country}</p>
        <p style={styles.detail}><strong>Released:</strong> {movie.Released}</p>
        <p style={styles.detail}><strong>Runtime:</strong> {movie.Runtime}</p>
        <p style={styles.detail}><strong>Box Office:</strong> {movie.BoxOffice}</p>
        <p style={styles.detail}><strong>Awards:</strong> {movie.Awards}</p>

        <div style={styles.ratingsContainer}>
          <h3 style={styles.ratingsTitle}>Ratings:</h3>
          {movie.Ratings.map((rating, index) => (
            <p style={styles.detail} key={index}>
              {rating.Source}: {rating.Value}
            </p>
          ))}
        <Button onClick={goBack} style={styles.backButton}>Back</Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#141414',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '1200px',
    margin: '20px auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    marginTop:'5%'
  },
  backButton:{
    backgroundColor:'black', 
    color:'#e50914', 
    // height:'50px', 
    // width:'80px', 
    border:'1px solid #e50914',
    padding:'12px'
  }
  ,
  posterContainer: {
    flex: '1',
    paddingRight: '20px',
  },
  poster: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
  },
  detailsContainer: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#e50914',
    marginBottom: '10px',
  },
  year: {
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: 'lighter',
  },
  detail: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  ratingsContainer: {
    marginTop: '20px',
    paddingTop: '10px',
    borderTop: '1px solid #444',
  },
  ratingsTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#e50914',
    marginBottom: '10px',
  },
};

export default MovieComponent;
