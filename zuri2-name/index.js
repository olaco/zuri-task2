"strict";
const http= require('http');

const PORT= process.env.PORT || 3000;


const server= http.createServer((req, res) => {

    res.writeHead(202, {
        'Content-Type': 'text/html'
    });

    let Responsename= 'Oladapo Cole';

    res.write(Responsename, (error)=> {
        console.log(error);
    })

    res.end()
});



server.listen(PORT, ()=> {
    let myName= 'Óladapo Cole'
    console.log(myName);
});