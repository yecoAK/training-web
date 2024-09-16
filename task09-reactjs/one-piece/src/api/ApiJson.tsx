export const getTypeData = {
    characters: 'characters',
    islands: 'islands',
    mysticObjects: 'mysticObjects'
};

export function readData() {
    const json = '../json/OnePiceInformation.json';

    return fetch(json, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response)
        .then(function (data) {
            return Promise.resolve(data);
        }).catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
}


function ApiJson() {
    const json = '../json/OnePiceInformation.json';

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
        sortData: function (response: any) {
            response.characters.sort((a: any, b: any) => a.name.localeCompare(b.name));
            response.islands.sort((a: any, b: any) => a.name.localeCompare(b.name));
            response.mysticObjects.sort((a: any, b: any) => a.name.localeCompare(b.name));
            return response;
        },
        getType: function (type: string, response: any) {
            switch (type) {
                case getTypeData.characters:
                    response.characters.sort((a: any, b: any) => a.name.localeCompare(b.name));
                    return response.characters;
                case getTypeData.islands:
                    response.islands.sort((a: any, b: any) => a.name.localeCompare(b.name));
                    return response.islands;
                case getTypeData.mysticObjects:
                    response.mysticObjects.sort((a: any, b: any) => a.name.localeCompare(b.name));
                    return response.mysticObjects;
                default:
                    return null;
            }

        }
    };
}

export default ApiJson;