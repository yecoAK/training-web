function json() {
    var json = '../json/OnePiceInformation.json';

    return {
        readData: function () {
            return fetch(json)
                .then(response => response.json())
                .then(function (data) {
                    return Promise.resolve(data);
                }).catch(function (error) {
                    return Promise.reject(new Error(error.statusText))
                });
        },
        sortData: function (response) {
            response.characters.sort((a, b) => a.name.localeCompare(b.name));
            response.islands.sort((a, b) => a.name.localeCompare(b.name));
            response.mysticObjects.sort((a, b) => a.name.localeCompare(b.name));
            return response;
        },
        getType: function (type, response) {
            switch (type) {
                case 'characters':
                    response.characters.sort((a, b) => a.name.localeCompare(b.name));
                    return response.characters;
                case 'islands':
                    response.islands.sort((a, b) => a.name.localeCompare(b.name));
                    return response.islands;
                case 'mysticObjects':
                    response.mysticObjects.sort((a, b) => a.name.localeCompare(b.name));
                    return response.mysticObjects;
                default:
                    return null;
            }

        }
    }
};
