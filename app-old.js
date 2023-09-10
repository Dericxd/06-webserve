
const http = require('http');

http.createServer( (req,res)  => {
    
    // res.writeHead(200,{ 'Content-type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200,{ 'Content-type': 'application/csv'});

    /* const persona = {
        id: 1,
        nombre: 'Fernando'
    } */
//

    //res.write( JSON.stringify(persona));
    res.write('Hola mundo');    
    res.end();
})
.listen(8080);

//console.log("🚀 ~ file: app.js:9 ~ http.createServer ~ createServer:", http)
console.log("🚀 ~ escuchando el puerto 8080")