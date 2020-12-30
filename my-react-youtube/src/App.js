import React from 'react';
import Joke from './Joke';
import './App.css';

function App() {
  return (
    <div className="App">

      <Joke question="Are you ready ?"
      />

      <Joke question="What is your name ?"
            answer="Haha!!! That's rubbish."
      />

      <Joke question="What do you do ?"
            answer="I won't tell you."
      />

      <Joke question="Whhere do you stay ?"
            answer="It's none of your business."
      />

      <Joke question="Are you mad ?"
            answer="Hehehe!!!"
      />

      <Joke question="Stop it ?"
            answer="(smile)"
      />

    </div>
  );
}

export default App;
