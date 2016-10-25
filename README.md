# twatt
Make Twatt App (CLI) With Node Js & Express Generator

Username's twitter : [twitter.comkenduigraha](kenduigraha)
## How to check
* User's Timeline
> `curl -X GET "localhost:3000/oauth/timeline"`

* User's Home
> `curl -X GET "localhost:3000/oauth/home"`

* Search
> `curl -X GET "localhost:3000/oauth/search?q={search_here}"`

* POSTMAN
> Click Authorization

> Type: OAuth 1.0

> Consumer Key : <consumer_key>

> Consumer Secret : <consumer_secret>

> Token : <token>

> Token Secret : <token_secret>

> Click Update Request

> Click Send
************************************

## Installation:
> Install Newest Node JS (v6.\*.\* LTS) : [nodeJS](https://nodejs.org/en/)

> npm install -g express

> npm install -g express-generator

> express . (for express generator) & npm install

> npm install --save express (for manual express)

> npm install --save nodemon


Pretty Json : (Add '| prettyjson' after installation)
> npm install --save-dev prettyjson

Authentication Token User
> npm install --save oauth

How to start server :
> npm start

************************************

# API References
## List of user routes :

| Route | HTTP | Description|
|-------|------|------------|
|`/oauth/home`|GET| Get home's twitter data|
|`/oauth/timeline`| GET | Get timeline's twitter data |

## HTTP Request's Example

| Action |Request|
|---------|-------|
|Read home's twitter|`curl -X GET "localhost:3000/oauth/home` |
|Read timeline's twitter|`curl -X GET "localhost:3000/oauth/timeline` |

************************************

## Directory :

```
.
├── README.md
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
************************************

## Contributor
Ken Duigraha Putra &copy; 2016
