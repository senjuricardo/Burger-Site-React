import React from "react"
import Aux from "../../../../hoc/Auxs"
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]} </li>
            ) 
        })
    return (
        <Aux>
            <h3>Your order:</h3>
            <p>A delicious burguer with the following ingredints:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue with checkout?</p>
        </Aux>

    )
}


export default orderSummary