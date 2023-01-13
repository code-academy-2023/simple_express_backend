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
        let updateBook=request.body;
        let data=book.updateBook(idBook, updateBook);
        response.json(data);
    }
);
controller.delete('/:id',
    function(request,response){
        let data=book.deleteBook(request.params.id);
        response.json(data);
    }
);


module.exports=controller;