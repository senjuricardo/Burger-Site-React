import React, {Component} from "react"
import './NavigationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem";

class navigationItems extends Component {
   
    render() {
        return(
             <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/checkout" >Checkout</NavigationItem>
    </ul>
        )
    }
}

export default navigationItems
