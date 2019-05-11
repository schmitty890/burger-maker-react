// BurgerBuilder made in containers folder as we plan on managing state for the burger we will build
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
      </Aux>
    );
  }
}

export default BurgerBuilder;