import React from "react";
import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"

const toolBar = (props) => (
<header className="Toolbar">
        <div>Menu </div>
        <Logo height="80%"></Logo>
        <nav className="DesktopOnly">
           <NavigationItems></NavigationItems>
        </nav>
</header>
);

export default toolBar