const test = require('tape')

const server = require('diet')
const jsonBody = require('../')
const axios = require('axios')

test('It should parse bodies sent with type application/json;charset=utf-8', t => {
	const app = server({silent: true})
	app.header(jsonBody)

	app.listen('http://localhost:7777')

	app.post('/', $ => {
		t.equal($.request.headers['content-type'], 'application/json;charset=utf-8', 'Content-Type was application/json')
		t.equal(typeof $.body, 'object', 'Body was parsed into an object')
		t.deepEqual($.body, {
			test: 'test',
		}, 'Correct object was returned')
		$.end()
	})

	axios.post('http://localhost:7777', {
		test: 'test',
	}).then(() => {
		t.end()
	}).catch(err => {
		t.error(err)
		t.end()
	})
})

test('It should parse bodies sent with type application/json', t => {
	const app = server({silent: true})
	app.header(jsonBody)

	app.listen('http://localhost:8888')

	app.post('/', $ => {
		t.equal($.request.headers['content-type'], 'application/json', 'Content-Type was application/json')
		t.equal(typeof $.body, 'object', 'Body was parsed into an object')
		t.deepEqual($.body, {
			test: 'test',
		}, 'Correct object was returned')
		$.end()
	})

	axios.post('http://localhost:8888', {
		test: 'test',
	}, {
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(() => {
		t.end()
	}).catch(err => {
		t.error(err)
		t.end()
	})
})

test.onFinish(() => {
	process.exit(0)
})
