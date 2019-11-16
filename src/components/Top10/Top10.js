import React, { Component } from 'react'
import Top10Item from './Top10Item'
import PropTypes from 'prop-types'

class Top10 extends Component {
    render() {
        return this.props.top10.map(item => (
            <Top10Item
                key={item._id}
                top10Item={item}
            />
        ))
    }
}

Top10.propTypes = {
    top10: PropTypes.array.isRequired,
}

export default Top10
