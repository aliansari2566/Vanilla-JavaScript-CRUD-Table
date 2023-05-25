var count=1;
var tdfname, tdlname, tdage;
const add = ()=> {
    // alert("working");
    let fn = document.getElementById('fname').value
    let ln = document.getElementById('lname').value
    let age = document.getElementById('age').value

    var table = document.getElementById("mytable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
  
    cell1.innerHTML = count++;
    cell2.innerHTML = fn;
    cell3.innerHTML = ln;
    cell4.innerHTML = age;
    cell5.innerHTML = '<button  class="btn btn-danger" type="button" onclick="Javacsript:delete_row(this)">Delete</button>';
    cell6.innerHTML = '<button class="btn btn-primary" type="button" onclick="update_row(this)"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>';
 


}
const delete_row =(obj)=>{
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("mytable");
    table.deleteRow(index);
}
const update_row=(obj)=>{
    // var firstCellText = obj.parentNode.parentNode.firstElementChild.textContent;
    // alert(firstCellText);

    // var tdfname = obj.parentNode.parentNode.childNodes[1].textContent;
    // var tdlname = obj.parentNode.parentNode.childNodes[2].textContent;
    // var tdage = obj.parentNode.parentNode.childNodes[3].textContent;

    tdfname = obj.parentNode.parentNode.childNodes[1];
     tdlname = obj.parentNode.parentNode.childNodes[2];
     tdage = obj.parentNode.parentNode.childNodes[3];
    // var current_id = obj.parentNode.parentNode.id;
    // alert(current_id);
}
const change = ()=> {
   

    let newfn = document.getElementById('ufname').value
    let newln = document.getElementById('ulname').value
    let newage = document.getElementById('uage').value

    // tdfname.textContent = newfn;
    // tdlname.textContent = newln;
    // tdage.textContent = newage;
    
 tdfname.innerHTML = newfn;
 tdlname.innerHTML = newln ;
 tdage.innerHTML = newage ;

 
    


  
  }