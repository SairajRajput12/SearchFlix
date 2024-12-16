import React from 'react';

const ErrorComponent = ({ errorCode, message }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>{errorCode}</h1>
      <p style={styles.message}>{message}</p>
      <a href="/" style={styles.homeLink}>Return to Home</a>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#141414',
    color: '#ffffff',
    textAlign: 'center',
    padding: '50px 20px',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '100px auto',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  errorCode: {
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#e50914',
  },
  message: {
    fontSize: '1.5rem',
    margin: '20px 0',
  },
  homeLink: {
    fontSize: '1.2rem',
    color: '#e50914',
    textDecoration: 'none',
    border: '1px solid #e50914',
    padding: '10px 20px',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default ErrorComponent;
