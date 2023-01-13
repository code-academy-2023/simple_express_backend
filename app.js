const express = require('express');
const app = express();
var port;
if(process.env.PORT != undefined){
  port=process.env.PORT;
}
else {
  port='3000';
}

app.get('/',
    function(request, response){
        response.send("Express REST API");
    }
);

app.use(
    function(request,response,next){
        console.log("Tämä on Middleware 1");
        next();
    }
);

app.get('/example1',
    function(request,response){
        response.send('I am example');
        console.log('I am example hei');
    }
);

app.use(
    function(request,response,next){
        console.log("Tämä on Middleware 2");
        next();
    }
);

app.get('/sayhello/:fname',
    function(request,response){
        console.log("test");
        let fn=request.params.fname;
        response.send("Terve "+fn);
    }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports =app;