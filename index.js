module.exports = function ($) {
	const contType = $.request.headers['content-type']
	// trim off ;charset=UTF-8 and any other options
	if (contType.split(';')[0].trim() === 'application/json') {
		// it might have already been successfully parsed by Diet's native body parser
		if (typeof $.body === 'string') {
			try {
				$.body = JSON.parse($.body)
			} catch (e) {
				// otherwise just leave it as is
			}
		}
	}
	$.return()
}
