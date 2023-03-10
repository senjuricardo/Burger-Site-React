import React, {Component} from 'react'
import Aux from '../../hoc/Auxs'
import  './Layout.css'
import ToolBar from '../Navigation/ToolBar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    state={
            showSideDrawer: false
    }
    SideDrawerCLoseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    SideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }
    render() {
        return(
            <Aux>
            <ToolBar open={this.SideDrawerOpenHandler} ></ToolBar>
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCLoseHandler}></SideDrawer>
            <main className='Content'>{this.props.children}</main>
        </Aux>
        )
    }
}
  
export default Layout
