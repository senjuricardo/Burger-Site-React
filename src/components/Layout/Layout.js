import React, {Component} from 'react'
import Aux from '../../hoc/Auxs'
import  './Layout.css'
import ToolBar from '../Navigation/ToolBar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    state={
            showSideDrawer: true
    }
    SideDrawerCLoseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    render() {
        return(
            <Aux>
            <ToolBar></ToolBar>
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCLoseHandler}></SideDrawer>
            <main className='Content'>{this.props.children}</main>
        </Aux>
        )
    }
}
  
export default Layout
