const http = require("http")
const {readFileSync} = require("fs")
const homeBage = readFileSync("./navbar-app/index.html")
const homeImage = readFileSync("./navbar-app/browser-app.js")
const homeStyle = readFileSync("./navbar-app/styles.css")
const homeLogo = readFileSync("./navbar-app/logo.svg")

const server = http.createServer((req,res)=>{
    console.log("user hit the server")
    const url = req.url; 
    if(url === "/"){
        res.writeHead(200,{"content-type": "text/html"})
        res.write(homeBage)
        res.end()
    }
    else if(url === "/styles.css"){
    res.writeHead(200,{"content-type": "text/css"})
    res.write(homeStyle)
    res.end() 
}
    else if(url === "/logo.svg"){
    res.writeHead(200,{"content-type": "image/svg+xml"})
    res.write(homeLogo)
    res.end()
}
    else if(url === "/browser-app.js"){
    res.writeHead(200,{"content-type": "text/javascript"})
    res.write(homeImage)
    res.end()
}
    else if(url === "/about"){
    res.writeHead(200,{"content-type": "text/html"})
    res.write("<h1>welcome to may about bage</h1>")
    res.end()
}
    else{
    res.writeHead(404,{"content-type": "text/html"})
    res.write("<h1>bage not found</h1>")
    res.end()
}



})

server.listen(5001)