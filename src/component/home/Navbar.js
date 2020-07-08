import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import '../../assset/style/homepage/navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavBar
                    mode="dark"
                    leftContent="心情惬意，来杯咖啡吧 ☕"
                ></NavBar>
            </div>
        )
    }
}
