import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class ResultItem extends Component {

    kindTypeCheck = () => this.props.result.wrapperType === 'audiobook' ? { display: 'none' } : {}

    render() {
        const {
            kind,
            trackName,
            collectionName,
            artworkUrl60,
            shortDescription,
            primaryGenreName
        } = this.props.result;
        let { longDescription } = this.props.result
        longDescription = longDescription ? longDescription.slice(0, 45) : ''

        return (
            <div className="item-row align-item__center">
                <img src={artworkUrl60} alt="artwork" className="margin-right-5px" />
                <div className="child-featured">
                    <p >
                        {' '}{trackName}
                        {' '}<span className="frame-clip kind" style={this.kindTypeCheck()}>{kind}</span>
                        {' '}<span className="frame-clip primary-genre">{primaryGenreName}</span>
                    </p>
                    <p className="sub-result">
                        {' '} {shortDescription ? shortDescription : longDescription}
                        {' '} {collectionName}
                        {' '}
                    </p>
                </div>
                <Link
                    className="info-btn"
                    to={{
                        pathname: '/details',
                        state: { track: this.props.result }
                    }}
                >Details</Link>
            </div>
        )
    }
}

ResultItem.propTypes = {
    result: PropTypes.object.isRequired,
}

export default ResultItem
