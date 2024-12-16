import React from 'react';

const LoadingComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#141414',
    color: '#ffffff',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  spinner: {
    width: '80px',
    height: '80px',
    border: '8px solid rgba(255, 255, 255, 0.1)',
    borderTop: '8px solid #e50914',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '20px',
    fontSize: '1.5rem',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default LoadingComponent;
