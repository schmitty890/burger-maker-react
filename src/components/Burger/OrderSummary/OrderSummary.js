import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
    <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
    <ul>
      {ingredientSummary}
    </ul>
    <p>Continue to Checkout?</p>
    <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
  </Aux>
  )

};

export default orderSummary;