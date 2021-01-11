import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Left from './Left'
import Top from './Top'

export class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Top />
                <Left />
                <div className="content">
                    <Switch>
                        <Route path="/page1" component={Page1} />
                        <Route path="/page2" component={Page2} />
                        {/* <Route path="/" component={Page1} /> */}
                    </Switch>
                    <div id="container"></div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Layout
