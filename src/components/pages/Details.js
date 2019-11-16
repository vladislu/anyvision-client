import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export class Details extends Component {
    state = {
        track: {}
    }

    componentDidMount() {
        let { track } = this.props.location.state
        const endFile = track.artworkUrl60.split('.')
        track.artworkUrl400 = track.artworkUrl60.slice(0, -11) + '400x0w.' + endFile[endFile.length - 1]
        this.setState({ track })
    }

    playerHeight = () => this.state.track.kind === 'song' || this.state.track.wrapperType === 'audiobook' ? '10%' : '100%'
    kindTypeCheck = () => this.state.track.wrapperType === 'audiobook' ? { display: 'none' } : {}
    priceCheck = () => this.state.track.trackPrice > 0 ? {} : { display: 'none' }
    rentalPriceCheck = () => this.state.track.trackRentalPrice > 0 ? {} : { display: 'none' }

    render() {
        const {
            artworkUrl400,
            previewUrl,
            longDescription,
            shortDescription,
            trackName,
            collectionName,
            kind,
            primaryGenreName,
            trackPrice,
            trackRentalPrice,
            trackViewUrl
        } = this.state.track

        return (
            <div className="item-row align-item__center">
                <img src={artworkUrl400} alt="artwork" className="margin-right-5px" />
                <div className="child-featured margin-left-5px">
                    <p className="margin-bottom-1rem">
                        {' '}<span className="font-size-2rem">{trackName}</span>
                        {' '}<span className="frame-clip kind margin-right-5px" style={this.kindTypeCheck()}>{kind}</span>
                        {' '}<span className="frame-clip primary-genre">{primaryGenreName}</span>
                    </p>
                    <p className="sub-result margin-bottom-1rem">
                        {' '} {longDescription ? longDescription : shortDescription}
                        {' '} {collectionName}
                        {' '}
                    </p>
                    <p className="margin-bottom-1rem">
                        <span style={this.rentalPriceCheck()}>Rent ${trackRentalPrice} {' / '}</span>
                        <span style={this.priceCheck()}>Buy ${trackPrice}</span>
                        <a className="info-btn margin-left-5px" href={trackViewUrl} rel="noopener noreferrer" target="_blank">Go to iTunes</a>
                    </p>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            url={previewUrl}
                            className='react-player'
                            width='100%'
                            height={this.playerHeight()}
                            controls
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Details
