let fs = require('fs')

exports.handler = async (event) => {
	const allStubs = JSON.parse(fs.readFileSync('./stubs.json', 'utf8', 'r')).stubs
	const numOfUrls = Math.floor(Math.random() * 11)
	let finalArray = []
	let response = {}

	for (let i = 0; i < numOfUrls - 1; i++) {
		const hierarchy_level = Math.floor(Math.random() * 4)
		const currentLevel = 0
		if (event && event.queryStringParameters && event.queryStringParameters.expert) {
			finalArray.push(getHierarchyArray(allStubs[Math.floor(Math.random() * allStubs.length - 1)], currentLevel, hierarchy_level))
		} else {
			finalArray.push(allStubs[Math.floor(Math.random() * allStubs.length - 1)])
		}
	}
	if (Math.floor(Math.random() * 100) > 5) {
		response = {
			statusCode: 200,
			body: JSON.stringify(finalArray),
		}
	} else {
		const httpStatusCodes = [403, 404, 500, 503]
		const statusCode = httpStatusCodes[Math.floor(Math.random() * 3)]
		response = {
			statusCode: statusCode,
			body: JSON.stringify(),
		}
	}
	return response
}

function getHierarchyArray(url, currentLevel, hierarchyLevel) {
	while (currentLevel < hierarchyLevel) {
		url = {[`a${currentLevel}`]: url}
		currentLevel++
		url = getHierarchyArray(url, currentLevel, hierarchyLevel)
	}
	return url
}
