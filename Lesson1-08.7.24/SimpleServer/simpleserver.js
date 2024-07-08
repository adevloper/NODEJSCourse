// 1. Import http module
const http=require('http');
const server=http.createServer((request,response)=>{

response.end('hellow word');
})
const PORT=3000;
server.listen(PORT,()=>{
console.log(`Server is running on porthttp://localhost:${PORT}`);
});
