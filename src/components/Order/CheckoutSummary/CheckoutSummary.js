import React from 'react'
import Burger from '../../Layout/Burguer/Burger'
import Button from '../../UI/Button/Button'
import  './CheckoutSummary.css'


const CheckoutSummary = (props) => {

    return (
        <div className='CheckoutSummary'>
            <h1>We hope you like it!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredientes={props.ingredientes} />
            </div>
            <Button btnType="Danger">Procede</Button>
            <Button btnType="Success">Cancel</Button>
            
        </div>
    )


}

export default CheckoutSummary