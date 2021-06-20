import React from 'react';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div class='ballHolder'>
        <div class="pokeBall"><i></i></div>
        <div class="pokeBall"><i></i></div>
        <div class="pokeBall"><i></i></div>
        <div class="pokeBall"><i></i></div>
        <div class="pokeBall"><i></i></div>
        <div class="pokeBall"><i></i></div>
      </div>
    );
  }
}

export default Home;