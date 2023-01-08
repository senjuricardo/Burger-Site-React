import React, { Component } from "react";
import Aux from '../../hoc/Auxs'
import Burger from "../../components/Layout/Burguer/Burger";
import BuildControls from "../../components/Layout/Burguer/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Layout/Burguer/OrderSummary/OrderSummay";
import axios from "../../../src/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.3,
    bacon: 0.8
}
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...}

    // }
    state = {
        ingredientes: null,
        totalPrice: 3,
        purchaseable: false,
        purchasing: false,
        loading: false,
    }

    componentDidMount () {
        axios.get( '/ingredientes.json' )
            .then( response => { 
                console.log(response)
                 this.setState( { ingredientes: response.data } );
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredientes[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredientes
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredientes: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredientes[type];
        if (oldCount <= 0) {
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
        this.setState({ totalPrice: newPrice, ingredientes: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        //alert('you continue')
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredientes,
            price: this.state.price,
            customer: {
                name: 'Ricardo',
                address: {
                    street: 'random street',
                    zipCOde: '12512',
                    country: 'Portugal',
                },
                email: 'teste@teste.pt'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredientes
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummary = null;
       
        let burger = <Spinner></Spinner>
        if (this.state.ingredientes) {
            burger = (
                <Aux>
                    <Burger ingredientes={this.state.ingredientes}></Burger>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disable={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchaseable}
                        ordered={this.purchaseHandler} />
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.state.ingredientes}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                orderTotal={this.state.totalPrice} />
        }
        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default BurgerBuilder