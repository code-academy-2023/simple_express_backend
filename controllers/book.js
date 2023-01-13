const express = require('express');
const controller=express.Router();
const book=require('../models/book_model');

controller.get('/',
    function(request,response){
        console.log("get pyyntö");
        let data=book.getAllBooks();
        response.json(data);
    }
);
controller.get('/:id',
    function(request,response){
        let idBook=request.params.id;
        let data=book.getOneBook(idBook);
        if(data){
            response.json(data);
        }
        else{
            response.json("not found");
        }
    }
);
controller.post('/',
    function(request,response){
        let newBook=request.body;
        let data=book.addBook(newBook);
        response.json(data);
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