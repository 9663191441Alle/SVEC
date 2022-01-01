import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporation Bank is located at @(this.props.location)</h1>
            </div>
        )
    }
}
