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
        totalPrice: 3,
        purchaseable: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchaseable: sum > 0 } );
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
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredientes[type];
        if(oldCount <= 0){
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredientes
            
        };
        updatedIngredients[type] = updatedCount;
      
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredientes: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }
    
    render() {
        const disableInfo = {
            ...this.state.ingredientes
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        return(
            <Aux>
                <Burger ingredientes={this.state.ingredientes}></Burger>
               <BuildControls 
               ingredientAdded={this.addIngredientHandler}
               ingredientRemove={this.removeIngredientHandler}
               disable={disableInfo}
               price={this.state.totalPrice}
               purchasable={this.state.purchaseable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder