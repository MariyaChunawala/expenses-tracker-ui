import React from "react";
import SideNavbar from "../Components/SideNavbar";

const DefaultLayout = ({ children }) => {
    return (<>
        <SideNavbar />
        {children}
    </>)
}

export default DefaultLayout;