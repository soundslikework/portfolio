import React, { Component } from 'react';

import Hero from './components/Hero';
import Profiles from './components/Profiles';
import Intro from './components/Intro';

import './App.css';

/** To Do
 * Hero: Typing, text disappearing
 * Intro: More text?
 * Work experience: include examples?
 * School: examples?
 * Press? Mehhhhh
 * Links
 * Text shadow that changes as you scroll
 * Simple colors, grays 80s palette
 * 
 */

const App = (props) => {
  return (
    <div className="App">
      <Hero data={props.data.basics} />
      <Intro data={props.data} />
      <main>
        <p>To get started edit some shit</p>
      </main>
      <Profiles data={props.data.basics.profiles} />
      <footer>
        Footer content
      </footer>
    </div>
  );
}

export default App;
