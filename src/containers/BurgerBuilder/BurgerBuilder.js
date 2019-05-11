// BurgerBuilder made in containers folder as we plan on managing state for the burger we will build
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>build controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;