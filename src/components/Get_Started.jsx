import React, { useState, useEffect } from 'react';
import './GetStarted.css'; 
import Input from '../UI/Input';
import Form from '../UI/form';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

export default function Get_Started() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [currentText, setCurrentText] = useState(0);

  const textArray = [
    "Unlimited movies Data, TV shows and more",
    "Find your favorite movies and shows",
    "Enjoy seamless access to entertainment",
  ];

  // Automatically change the text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [textArray.length]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/fetch_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: searchInput }),
      });
  
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
      return result; // Return the result if needed
    } catch (error) {
      console.error('An error has occurred:', error);
      // Handle the error appropriately in your UI
    }
  };
  

  const submitPreference = async (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      try {
        const data = await getData(); 
        navigate(`/search/${searchInput}`, { state: { searchQuery: searchInput, data:data.data } });
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate(`/search/${searchInput}`, { state: { searchQuery: searchInput, data:undefined } });
      }
    } else {
      alert('Please enter a search query.');
    }
  };
  

  return (
    <div className='intro'>
      <h1 className='sliding-text'>{textArray[currentText]}</h1>
      <br />
      <p>Search Anything, watch anything at anytime.</p>
      <Form className='user-first-prefrence'>
        <Input 
          className='user-input' 
          placeholder='Search by movie title' 
          onChange={(e) => setSearchInput(e.target.value)} 
        />
        <Button onClick={(e) => submitPreference(e, searchInput)} className='user-button'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
