import React, { useState, useEffect } from 'react';
import './GetStarted.css';
import Input from '../UI/Input';
import Form from '../UI/form';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../UI/Loading';

export default function Get_Started() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [currentText, setCurrentText] = useState(0);
  const [loading, setLoading] = useState(false);

  const textArray = [
    'Unlimited movies Data, TV shows and more',
    'Find your favorite movies and shows',
    'Enjoy seamless access to entertainment',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getData = async () => {
    console.log('fetching data');
    try {
      const response = await fetch('https://searchflix-backend.onrender.com/fetch_request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: searchInput }),
      });

      if (!response.ok){
        alert('your requested movie not found in our database.Hope you will love below recommendations');
        throw new Error(`HTTP error! Status: ${response.status}`);
      } 

      const result = await response.json();
       
      console.log(result);
      return result;
    } catch (error) {
      console.error('An error has occurred:', error);
    }
  };

  const submitPreference = async (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setLoading(true);
      try {
        const data = await getData();
        navigate(`/search/${searchInput}`, { state: { searchQuery: searchInput, data: data?.data } });
      } catch (error) {
        navigate(`/search/${searchInput}`, { state: { searchQuery: searchInput, data: undefined } });
      } finally {
        setLoading(false); 
      }
    } else {
      alert('Please enter a search query.');
    }
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <div className="intro">
        <h1 className="sliding-text">{textArray[currentText]}</h1>
        <br />
        <p>Search Anything, watch anything at anytime.</p>
        <Form className="user-first-prefrence">
          <Input
            className="user-input"
            placeholder="Search by movie title"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button onClick={submitPreference} className="user-button">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
