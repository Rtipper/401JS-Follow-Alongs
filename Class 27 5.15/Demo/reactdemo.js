// THIS IS IN APP.JS IN REACT BUILD

import React from 'react';
import Zach from './components/zach.js';
import Allie from './components/allie.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 1000
    }
  }

  withdrawl = (amount) => {
    if(amount <= 50) {
      this.setState({...this.state, balance: this.state.balance - amount})
    }
  }

// COMMENTED OUT BECAUSE NOT AN ACTUAL REACT APP
//   render() {
//     return {
//       <div>
//         <h1>Bank Balance: {this.state.balance}</h1>
//         <hr />
//         <Zach food="cookies" useAtmCard={this.withdrawl} />
//         <Allie food="trail mix" useAtmCard={this.withdrawl} />
//       </div>
//     }
//   }
}

// OTHER FILE (zach.js)
// SRC --> COMPONENTS --> zach.js
function Zach(props) {

  function withdrawlMoney() {
    props.useAtmCard(25);
  }

  return (
    <div>
    Thanks for the {props.food}
    <button onClick={withdrawlMoney}>Take Money From Dad</button>
    </div>
  )
}

export default Zach;

// OTHER FILE (allie.js | made as a class, rather than function)
// SRC --> COMPONENTS --> allie.js
import React from 'react';

class Allie extends React.Component {

  // AUTO BINDING -- CREATE CLASS METHOD W/ARROW FUNCTION TO AUTO BIND
  withdrawlMoney = () => {
    this.props.useAtmCard(25)
  }

  render() {
    return (
      <div>
        Thanks for the {this.props.food}
        <button onClick={this.withdrawlMoney}>Take Money From Dad</button>
      </div>
    )
  }
  }

export default Allie;
