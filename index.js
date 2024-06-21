import http from 'http';
import 'dotenv/config.js'
import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const port = process.env.PORT;

//get the filepath
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer( async(req,res) => {
    
    try {
        if(req.method === 'GET') {
            let filepath;
            if(req.url === '/') {
                filepath = path.join(__dirname,'index.html')
                
            } else if(req.url === '/about') {
                filepath = path.join(__dirname,'about.html')

            } else if(req.url === '/contact') {
                filepath = path.join(__dirname,'contact-me.html')

            } else {
                filepath = path.join(__dirname,'404.html')
            }
            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
         
            } else {
                res.writeHead(400,"Request Error");
                res.end('<h1>Request Errror<h1>')
            }
        
        }

     catch(error) {
        console.log(error)

    }
    
    
})

server.listen(port,() => {
    console.log(`Server running at:${port}`);
})