## Solution

* Solve this [CodeWars Kata test](https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript) using your asynchronous abilities.
* Solution of that problem


```
function sayJoke(apiUrl, jokeId) {
    return fetch(apiUrl)
    .then(response =>
        response.json()
    )
    .then(json => {
      
        const joke = json.jokes.find(joke => {
           return joke.id === jokeId
        })
      
        if(!joke) {
          throw new Error(`No jokes found id: ${jokeId}`);
        }
        
        return {
                  saySetup: () => joke.setup, 
                  sayPunchLine: () => joke.punchLine
              };
        
    }).catch(error => {
        throw new Error(`No jokes at url: ${apiUrl}`);
    })
};
```
