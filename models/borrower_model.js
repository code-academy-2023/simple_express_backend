const borrowerArray=[
    {fname:"Matti", lname:"Mainio"},
    {fname:"Matti", lname:"Virta"},
    {fname:"Liisa", lname:"Mainio"},
    {fname:"Maija", lname:"Testi"},
    {fname:"Aino", lname:"Järvi"}

];

const borrower={
    getAllBorrowers:function(){
        return borrowerArray;
    },
    getOneBorrower:function(id){
        return borrowerArray[id];
    },
    addBorrower:function(addData){
        let sql="insert into borrower values("+addData.fname+","+addData.lname+")";
        return sql;
    },
    updateBorrower:function(id,updateData){
        let sql="update borrower set fname="+updateData.fname+", lname="+updateData.lname+" where idBorrower="+id+")";
        return sql;
    },
    deleteBorrower:function(id){
        let sql="delete from borrower where idBorrower="+id;
        return sql;
    }
}

module.exports=borrower;