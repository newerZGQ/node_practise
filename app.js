const http = require('http')
const fs = require('fs')
http.createServer(function(request, response){
    fs.readFile('./res/titles.json', (error, data) => {
        if(error){
            console.error(error);
        }else{
            const titles = JSON.parse(data.toString());
            fs.readFile('./res/template.html', (error, data) => {
                const temp = data.toString();
                const html = temp.replace('%', titles[0]);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(html);
            })
        }
    });
}).listen(8888);