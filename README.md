# diet-json-body
Adds a little extra gas to Diet's JSON body parser

Diet actually already does JSON body parsing, but there's a bug which causes it to fail when
the content-type is `application/json;charset=UTF-8` which is the most commonly used
content-type when sending JSON.

There's an open pull request that addresses this, but who knows when that'll be merged in. This
is a fix in the meanwhile. I'll update the README should this module become obsolete.

```
npm install diet-json-body
```

```
const server = require('diet')
const jsonBody = require('diet-json-body')

var app = server()

app.header(jsonBody)
```
