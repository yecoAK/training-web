For this exercise, we need to use an API. We want the web site to have the feature translation language, two languages (Spanish and English), only the description values for each item will be translated, the locations, names, skill, Origen won't be translated. 

Use what you learn in the section Asynchronous programming with JavaScript, for example, promises to accomplish this task.

The recommendation is to test this API with Postman or a similar tool, before using this endpoint with code, also check the API documentation for any changes

`curl --location --request POST 'https://libretranslate.de/translate' \
--header 'Content-Type: application/json' \
--data-raw '{
 "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.",
 "source": "en",
 "target": "es"
}'`