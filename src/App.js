import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Homepage from './component/homepage'
export default class App extends Component {
    render() {
        return (
            <div>
                <Homepage/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
