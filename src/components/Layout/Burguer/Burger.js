import React from "react";
import './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedIngredints = Object.keys( props.ingredientes )
    .map( igKey => {
        return [...Array( props.ingredientes[igKey] )].map( ( _, i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
if (transformedIngredints.length === 0) {
    transformedIngredints = <p>Please start adding ingredients!</p>;
}
        
    return (
       
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredints}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

}

export default burger