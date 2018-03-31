import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import DefaultContent from "../pages/defaultPage/index";
import permission from "../pages/permissionPage/index";
const MainContent = () => {
    return (
        <div className="content-wrapper" >
            <Switch>
                <Route exact path="/" component={DefaultContent} />
                <Route path="/permission" component={permission} />
            </Switch>
        </div>
    )
};
export default  MainContent