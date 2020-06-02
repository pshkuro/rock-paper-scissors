import React from 'react';
import Game from './components/game/Game';
import './App.scss';
import './styles/typography.scss';
import './styles/colors.scss';
import './styles/image.scss';
import './styles/button.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Game />
      </div>
    </div>
  );
}

export default App;
