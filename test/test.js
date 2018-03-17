const test = require('tape')

const server = require('diet')
const jsonBody = require('../')

const app = server()
app.header(jsonBody)

app.get('/', $ => {
	$.data = $.body
	$.json()
	$.end()
})

test('It should parse bodies sent with type application/json;charset=UTF-8', function (t) {

})
