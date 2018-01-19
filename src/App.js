import React from 'react';

import Hero from './components/Hero';
import Profiles from './components/Profiles';
import Intro from './components/Intro';
import Work from './components/Work';
import Education from './components/Education';

import './App.css';

/** To Do
 * Hero: Mousemove shadow
 * Intro
 * Work: Layout, examples
 * School: Layout, examples
 * Links
 * Styling: Text shadow that changes as you scroll; simple colors, grays 80s palette
 * 
 */

const App = (props) => {
  return (
    <div className="App">
      <Hero data={props.data.basics} />
      <Intro data={props.data.basics} />
      <Work data={props.data.work} />
      <Education />
      <Profiles data={props.data.basics.profiles} />
      <footer>
        Footer content
      </footer>
    </div>
  );
}

export default App;
