const http = require('http');
const port = 8080;

const server = http.createServer((request, response) => {
	console.log(request);
	response.end('Hello From server');
});

server.listen(port, (error) => {
	if(error){
		return console.log(`Server Error ${error}`);
	}
	console.log(`Server running at ${port}` )
});