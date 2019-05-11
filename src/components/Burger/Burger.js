import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  // transform the object passed by props into an array of ingredients with 
  const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
          return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
          })
        });

  console.log(transformedIngredients);
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;