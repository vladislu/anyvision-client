class Rest {
    async send(path, method, body, params = '') {
        const headers = {
            'Content-Type': 'application/json'
        }

        const token = localStorage.getItem('token')
        if (token) {
            headers['Authorization'] = 'Bearer ' + token
        }
        
        try {
            const response = await fetch(path + params, {
                method: method,
                headers: headers,
                body: body ? JSON.stringify(body) : null
            });
            
            const result = await response.json()
            if (response.status > 299 || response.status < 199) {
                return Promise.reject(result)
            }
            return result
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export default new Rest()