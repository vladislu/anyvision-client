import Rest from './Rest'

class Api {
    // API_URL = 'http://localhost:3030'
    API_URL = 'https://vs-anyvision-server.herokuapp.com'
    ITUNES_URL = 'https://itunes.apple.com'

    async search(params) {
        return Rest.send(this.ITUNES_URL + '/search?limit=25&term=', 'GET', null, params)
    }

    async searchFindById(params) {
        return Rest.send(this.ITUNES_URL + '/lookup?id=', 'GET', null, params)
    }

    async searchUpdate(params) {
        return Rest.send(this.API_URL + '/api/search', 'POST', { searchQuery: params })
    }

    async top10() {
        return Rest.send(this.API_URL + '/api/search/top10', 'GET')
    }
}

export default new Api()