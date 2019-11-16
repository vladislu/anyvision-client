import React, { Component } from 'react'

export class Top10Item extends Component {
    render() {
        const { count, search_query } = this.props.top10Item;
        return (
            <div className="item-row">
                <div className="margin-right-5px"> This value </div> 
                <div className="margin-right-5px value-alert"> {search_query} </div> 
                <div className="margin-right-5px"> searched </div> 
                <div className="margin-right-5px value-alert"> {count} </div> 
                <div className="margin-right-5px"> times </div> 
            </div>
        )
    }
}

export default Top10Item
