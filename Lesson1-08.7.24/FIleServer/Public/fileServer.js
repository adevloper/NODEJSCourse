//1. Import http module
const http = require('http')
const path = require('path')
const fs = require('fs')
//2. Create server

const server = http.createServer((request, response)=>{
//3.1 Parrse Url and detemmine filename

const url = request.url==='/'?'index.html':request.url


const filepath = path.join(__dirname, "public", request.url)
console.log(`file name is ${filepath}`)
//read file asynchrony
fs.readFile(filepath, (error,content)=>{

    //1/check for errors
    if(error)
    {
        //check if
        if(error.code==='ENOENT')
        {
            const errorFile = path.join(__dirname,"publlic","404.html")
            fs.readFile(errorFile,(err,data)=>
            {

            })
        }
    }
    //2 if all is well return file
})
//3.2 If not path has defined - return 'index.html'
//3.3 ELSE look for the desired file
//3.4 If file not found - returned 404
//3.5 ELSE if the file is found - return file

response.end('hellw world')

});

const PORT = 3000

//4.Start the server
server.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
})
