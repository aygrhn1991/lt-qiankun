import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Left extends Component {
    render() {
        return (
            <div className="left">
                <ul>
                    <li><Link to="/page1">根页面1</Link></li>
                    <li><Link to="/page2">根页面2</Link></li>
                    <li><Link to="/reactapp/page1">应用A页面1(react)</Link></li>
                    <li><Link to="/reactapp/page2">应用A页面2(react)</Link></li>
                    <li><Link to="/vueapp/page1">应用B页面2(vue)</Link></li>
                    <li><Link to="/vueapp/page2">应用B页面2(vue)</Link></li>
                    <li><Link to="/angularapp/page1">应用C页面1(angular)</Link></li>
                    <li><Link to="/angularapp/page2">应用C页面2(angular)</Link></li>
                </ul>
            </div>
        )
    }
}

export default Left