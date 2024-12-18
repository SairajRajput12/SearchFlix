import React from 'react';
import { useLocation } from 'react-router-dom';



const ErrorComponent = () => {
  const location = useLocation(); 
  const code = location.state?.errorCode || 404;
  const errorMessage = location.state?.message || 'your requested route not found'; 


  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>{code}</h1>
      <p style={styles.message}>{errorMessage}</p>
      <a href="/" style={styles.homeLink}>Return to Home</a>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: ' rgba(0, 0, 0, 0.824)',
    color: '#ffffff',
    textAlign: 'center',
    // padding: '50px 20px',
    borderRadius: '8px',
    maxWidth: '100%', 
    height:'100vh', 
    // margin: '100px auto',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  errorCode: {
    paddingTop:'100px', 
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
