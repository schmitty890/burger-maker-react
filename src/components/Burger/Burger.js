import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  // transform the object passed by props into an array of ingredients with 
  let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
          return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
          })
        })
        .reduce((arr, el) => {
          // console.log('arr: ', arr);
          // console.log('el: ', el);
          return arr.concat(el);
        }, []); // now transformedIngredients is a flattened array of our jsx elements

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>add some ingredients</p>
  }
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