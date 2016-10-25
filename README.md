# twatt

# install

```
{
  "name": "twatt",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "^4.13.4",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "oauth": "^0.9.14",
    "serve-favicon": "~2.3.0"
  }

}
```

#API

```
Using oauth Api twitter
```

Routes | HTTP | Description |
------------ | ------------- | ---------|
/auth | GET |  Get user tweet


using Api

```
https://localhost:3000/auth?q="username"
```

example:

```
https://localhost:3000/auth?q=ken
```
