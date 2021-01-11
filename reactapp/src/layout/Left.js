import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Left extends Component {
    render() {
        return (
            <div className="left">
                <div><Link to="/page1">reactapp-page1</Link></div>
                <div><Link to="/page2">reactapp-page2</Link></div>
            </div>
        )
    }
}

export default Left