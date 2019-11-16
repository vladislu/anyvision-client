import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Results from './components/Results/Results'
import Top10 from './components/Top10/Top10'
import Header from './components/layout/Header'
import Search from './components/Search'
import Details from './components/pages/Details'
import Api from './utils/Api'
import './App.css'

class App extends Component {
  state = {
    search_results: [],
    search_queries: []
  }

  async componentDidMount() {
  }

  search = async (search_text) => {
    Api.searchUpdate(search_text)
    const search_results = await Api.search(search_text)
    this.setState({ search_results: search_results.results, search_queries: [] })
    console.log(this.state)
  }

  top10 = async (state) => {
    const search_queries = await Api.top10()
    this.setState({ search_queries, search_results: [] })
    console.log(this.state)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Search search={this.search} top10={this.top10} />
                <Results results={this.state.search_results} />
                <Top10 top10={this.state.search_queries} />
              </React.Fragment>
            )} />
            <Route path='/details' component={Details} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
