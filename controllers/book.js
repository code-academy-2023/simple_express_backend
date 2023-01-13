const express = require('express');
const controller=express.Router();

controller.get('/',
    function(request,response){
        console.log("get pyyntö");
        response.json("kaikki kirjat");
    }
);
controller.get('/:id',
    function(request,response){
        let idBook=request.params.id;
        response.json("kirja jonka id="+idBook);
    }
);
controller.post('/',
    function(request,response){
        let newBook=request.body;
        response.json(newBook);
    }
);
controller.put('/:id',
    function(request,response){
        let idBook=request.params.id;
        let newName=request.body.name;
        let newAuthor=request.body.author;
        response.json(idBook+" "+newName+" "+newAuthor);
    }
);
controller.delete('/:id',
    function(request,response){
        response.send("Poistetaan kirja, jonka id = "+request.params.id);
    }
);


module.exports=controller;