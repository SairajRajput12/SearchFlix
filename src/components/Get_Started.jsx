import React, { useState } from 'react';
import './GetStarted.css'; 
import Input from '../UI/Input';
import Form from '../UI/form';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

export default function Get_Started() {
  const navigate = useNavigate(); 
  const [searchInput, setSearchInput] = useState(''); // Track user input

  const submitPreference = (e,searchInput) => {
    e.preventDefault(); 
    if (searchInput.trim()) {
      navigate('/search', { state: { searchQuery: searchInput } }); // Pass the input as state
    } else {
      alert('Please enter a search query.');
    }
  };

  return (
    <div className='intro'>
      <h1>Unlimited movies Data, TV shows and more</h1>
      <br />
      <p>Search Anything, watch anything at anytime.</p>
      <Form className='user-first-prefrence'>
        <Input 
          className='user-input' 
          placeholder='Search by movie title' 
          onChange={(e) => setSearchInput(e.target.value)} 
        />
        <Button onClick={(e) => submitPreference(e,searchInput)} className='user-button'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
