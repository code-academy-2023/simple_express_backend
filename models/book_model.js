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
    }
}

module.exports=book;