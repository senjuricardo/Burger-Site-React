import React, { Component, useEffect } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useLocation } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { Route } from 'react-router-dom'
import ContactData from "./ContactData/ContactData";
const Checkout = () => {
    const location = useLocation();
    // state={
    //     ingredientes:{
    //         salad:1,
    //         meat:1,
    //         cheese:1,
    //         bacon:1

    //     }
    // }
    // getData = () => {
    //     const location = useLocation();
    //     const message = location.state.message;
    // }
    // const EmptyIngredient = () => {
    //     if(!location.state.ingredient){
    //          <h1>Please create a burger first</h1>
    //         }
    //      else{
    //         <CheckoutSummary ingredientes={location.state.ingredient} />
    //      }
    //      }
    console.log(location.state)
    let burger = <h1>Please first make your burger!</h1>
    if(location.state && location.state.ingredient){
        burger= <CheckoutSummary ingredientes={location.state.ingredient}/>  
    }
return (
    <div>
        {/* <div>{location.state.ingredient}</div> */}
        {/* {location.state.ingredient ? 
          <CheckoutSummary ingredientes={location.state.ingredient}/> :
          <h1>Please create a burger first</h1>
      } */}
        {burger}
      
        {/* {EmptyIngredient} */}
        {/* <CheckoutSummary ingredientes={location.state.ingredient} /> */}
        {/* <Route path={"/checkout/contact-data"} element={<ContactData />}></Route> */}
    </div>
)
}


export default Checkout