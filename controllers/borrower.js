const express = require('express');
const controller=express.Router();
const borrower=require('../models/borrower_model');

controller.get('/',
    function(request,response){
        console.log("get pyyntö");
        let data=borrower.getAllBorrowers();
        response.json(data);
    }
);
controller.get('/:id',
    function(request,response){
        let idBorrower=request.params.id;
        let data=borrower.getOneBorrower(idBorrower);
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
        let newBorrower=request.body;
        let data=borrower.addBorrower(newBorrower);
        response.json(data);
    }
);
controller.put('/:id',
    function(request,response){
        let idBorrower=request.params.id;
        let updateBorrower=request.body;
        let data=borrower.updateBorrower(idBorrower, updateBorrower);
        response.json(data);
    }
);
controller.delete('/:id',
    function(request,response){
        let data=borrower.deleteBorrower(request.params.id);
        response.json(data);
    }
);


module.exports=controller;