import React from "react"
import Button from "../../../UI/Button/Button"
import Aux from "../../../../hoc/Auxs"
import { useNavigate } from "react-router-dom"
const OrderSummary = (props) => {
    const navigate = useNavigate()
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]} </li>
            )
        })
    const navigateToCheckout = () => {
        navigate("/checkout");
    }
    return (
        <Aux>
            <h3>Your order:</h3>
            <p>A delicious burguer with the following ingredints:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><span style={{ fontWeight: "bold" }}>Price:</span> {props.orderTotal.toFixed(2)}</p>
            <p>Continue with checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={navigateToCheckout}>Continue</Button>
        </Aux>

    )
}


export default OrderSummary