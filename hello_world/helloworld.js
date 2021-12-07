const http = require ('http') // include NodeJS HTTP module

const hostname = '127.0.0.1' //localhost IP

const port = '3000' //default port for listening to server

const server = http.createServer((req, res) => {
  res.statusCode = 200 //HTTP success status code
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n') //always close response with end()
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
