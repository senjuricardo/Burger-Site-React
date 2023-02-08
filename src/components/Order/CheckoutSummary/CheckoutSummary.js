import React from 'react'
import Burger from '../../Layout/Burguer/Burger'
import Button from '../../UI/Button/Button'
import  './CheckoutSummary.css'
import { useNavigate } from "react-router-dom"

const CheckoutSummary = (props) => {
    const navigate = useNavigate()
    const navigateToMain = () => {
        navigate("/");
    }
    const navigateToData = () => {
        navigate("/checkout/contact-data",{
            state: {
              ingredient: props.ingredientes
            }
        });
    }
    return (
        <div className='CheckoutSummary'>
            <h1>We hope you like it!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredientes={props.ingredientes} />
            </div>
            <Button btnType="Success"clicked={navigateToData}>Procede</Button>
            <Button btnType="Danger" clicked={navigateToMain}>Cancel</Button>
            
        </div>
    )


}

export default CheckoutSummary