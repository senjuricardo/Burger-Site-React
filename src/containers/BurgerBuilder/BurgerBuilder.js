import React, { Component } from "react";
import Aux from '../../hoc/Auxs'
import Burger from "../../components/Layout/Burguer/Burger";
import BuildControls from "../../components/Layout/Burguer/BuildControls/BuildControls";

const INGREDIENT_PRICES= {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.3,
    bacon: 0.8
}
class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {...}

    // }
    state = {
        ingredientes: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredientes[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredientes
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredientes: updatedIngredients } );
        // this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {

    }
    
    render() {

        return(
            <Aux>
                <Burger ingredientes={this.state.ingredientes}></Burger>
               <BuildControls 
               ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder