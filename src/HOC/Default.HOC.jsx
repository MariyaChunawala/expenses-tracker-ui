import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({ Component, ...props }) => {
    return <>
        <Routes>
            <Route {...props} Component={
                (props) => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )
            } />
        </Routes>
    </>
}

export default DefaultHOC;