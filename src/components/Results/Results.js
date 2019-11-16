import React, { Component } from 'react'
import ResultItem from './ResultItem'
import PropTypes from 'prop-types'

class Results extends Component {
    render() {
        return this.props.results.map(result => (
            <ResultItem
                key={'' + result.artistId + result.collectionId + result.trackId}
                result={result}
            />
        ))
    }
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
}

export default Results
