import React, {Component} from "react"
import Button from "../../../components/UI/Button/Button"
import { useLocation } from "react-router-dom";
import  './ContactData.css'
const ContactData = (props) =>  {
    const location = useLocation();
    // state= {
    //     name: '',
    //     email: '',
    //     address: {
    //         stress: '',
    //         postal:''
    //     }
    // }

       const orderHandler= (event) => {
        event.preventDefault();
        console.log(location.state.ingredient)
        }
       
       
    
        return(
            <div className="ContactData">
                    <h4>Enter your Contact Data please</h4>
                    <form>
                        <input className="Input" type="text" name="name" placeholder="your name"></input>
                        <input className="Input" type="text" name="email" placeholder="your email"></input>
                        <input className="Input"  type="text" name="street" placeholder="your street"></input>
                        <input className="Input" type="text" name="postal" placeholder="your postal"></input>
                        <Button btnType="Success" clicked={orderHandler} >Order</Button>
                    </form>
            </div>
        )
    
}

export default ContactData