import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import PostForm from './components/PostForm';
import Form2 from './components/Form2';
import Sneakers from './components/Sneakers';

function App() {
  return (
    <div className="App">
     <Form/>
     <PostForm/>
     <Form2/>
     <Sneakers/>
     
    </div>
  );
  }

export default App;
