import React from 'react';
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{textTransform: 'capitalize'}}>
            {ingredientKey}
          </span>
          : {props.ingredients[ingredientKey]}
        </li>);
    });

  return (
    <Aux>
    <h3>Your order</h3>
    <p>Here is your burger</p>
    <ul>
      {ingredientSummary}
    </ul>
    <p>Continue to Checkout?</p>
    <button>CANCEL</button>
    <button>CONTINUE</button>
  </Aux>
  )

};

export default orderSummary;