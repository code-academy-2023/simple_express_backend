const bookArray=[
    {name:"JavaScript", author:"Teppo JavaScript"},
    {name:"Java", author:"Teppo Java"},
    {name:"CSS opas", author:"Liisa Virta"},
    {name:"PHP manual", author:"Aino Järvinen"}
];

const book={
    getAllBooks:function(){
        return bookArray;
    },
    getOneBook:function(id){
        return bookArray[id];
    },
    addBook:function(addData){
        let sql="insert into book values("+addData.name+","+addData.author+")";
        return sql;
    },
    updateBook:function(id,updateData){
        let sql="update book set name="+updateData.name+", author="+updateData.author+" where idBook="+id+")";
        return sql;
    },
    deleteBook:function(id){
        let sql="delete from book whered idBook="+id;
        return sql;
    }
}

module.exports=book;