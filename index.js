import http from 'http';
import 'dotenv/config.js'
import url from 'url';
import path from 'path';
import fs from 'fs/promises';
import express from "express";
const app = express();

const port = process.env.PORT;

//get the filepath
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let filepath;
/* const server = http.createServer( async(req,res) => {
    
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
}) */

app.get("/",  (req,res) => {
   filepath = path.join(__dirname,'index.html')
    res.sendFile(filepath)
})

app.get("/about",(req,res) => {
    filepath = path.join(__dirname,'about.html')
    res.sendFile(filepath)
})

app.get("/contact-me.html",(req,res) => {
    filepath = path.join(__dirname,"contact-me.html")
    res.sendFile(filepath)
})

app.get("*",(req,res) => {
    filepath = path.join(__dirname,"404.html")
    res.sendFile(filepath);
})

app.listen(port,() => console.log(`Express running at port: ${port}`))