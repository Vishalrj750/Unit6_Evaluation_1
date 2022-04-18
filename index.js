const http = require('http');
const app = require('./app');
const PORT = 9001;

http.createServer(app).listen(PORT, (req, res, next) => {
    console.log(`Server is live at port ${PORT}`)
})