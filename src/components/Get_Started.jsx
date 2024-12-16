import React from 'react';
import './GetStarted.css'; 
import Input from '../UI/Input';
import Form from '../UI/form';
import Button from '../UI/Button';

export default function Get_Started() {
  return (
    <div className='intro'>
        <h1>Unlimited movies Data, TV shows and more</h1>
        <br />
        <p>Search Anything, watch anything at anytime.</p>
        <Form className='user-first-prefrence'>
            <Input className='user-input' placeholder='Search by movie title' />
            <Button className='user-button'>Submit</Button>
        </Form>
    </div>
  )
}
