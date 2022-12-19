import React from 'react'
import Aux from '../../hoc/Auxs'
import  './Layout.css'
import ToolBar from '../Navigation/ToolBar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <ToolBar></ToolBar>
        <SideDrawer></SideDrawer>
        <main className='Content'>{props.children}</main>
    </Aux>
)

export default layout
