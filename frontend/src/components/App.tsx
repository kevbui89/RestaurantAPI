import React from 'react';
import '../styles/App.css';
import Body from './Body/Body';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name='Restaurant'></Header>
        <Body name='BodyyName'/>
        <Body name='BodyyName2'/>
      </header>
    </div>
  );
}

export default App;
