import React from 'react'
import Aux from '../../hoc/Auxs'
import  './Layout.css'
import ToolBar from '../Navigation/ToolBar/Toolbar'

const layout = (props) => (
    <Aux>
        <ToolBar></ToolBar>
        <main className='Content'>{props.children}</main>
    </Aux>
)

export default layout
