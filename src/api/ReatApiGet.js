const serverPath = "http://localhost:8080";

const RestApiGet = {
     async getData(path, queryString) {
        let fullSearch = path;
        if(queryString !== undefined) {
            fullSearch += queryString;
        }
        return fetch(serverPath + fullSearch, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}

export default RestApiGet