import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        search_text: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault()
        this.props.search(this.state.search_text)
        this.setState({ search_text: '' })
    }

    top10 = (e) => {
        e.preventDefault()
        this.props.top10(this.state)
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                    <input
                        type="button"
                        value="Top 10 searching"
                        className="btn"
                        style={{ flex: '1' }}
                        onClick={this.top10}
                    />
                    <input
                        type="text"
                        name="search_text"
                        placeholder="Search here ..."
                        style={{ flex: '10', padding: '5px', border: '5px solid #56D0FB' , fontFamily: 'inherit' }}
                        value={this.state.search_text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn"
                        style={{ flex: '1' }}
                    />
                </form>

            </div>
        )
    }
}

Search.propTypes = {
    search: PropTypes.func.isRequired,
    top10: PropTypes.func.isRequired,
}

export default Search
