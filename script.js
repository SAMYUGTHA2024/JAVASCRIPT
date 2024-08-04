//alert("hello");
//CRUD-CREATE,READ,UPDATE,DELETE
var row=null;
function Submit(){
    
  var data=retrieveData();
  var read=readData(data);
  if(data == false){
    msg.innerHTML=`<h3 style="color:crimson;">Please Enter Data!</h3>`;
  }
  else{
  if(row == null){
  insert(read);
  msg.innerHTML=`<h3 style="color:blue;">Data Inserted!</h3>`;
  }
  else{
    update();
    msg.innerHTML=`<h3 style="color:blue;">Data Updated!</h3>`;
  }
}
document.getElementById("form").reset();
}
//retriving data from form-create
function retrieveData() {
    var regno=document.getElementById("regno").value;
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var dob=document.getElementById("dob").value;
    var email=document.getElementById("email").value;
    var dept=document.getElementById("dept").value;
    var year=document.getElementById("year").value;
    var arr=[regno, fname, lname, dob, email, dept, year];
    if(arr.includes("")){
        return false;
    }
    else{
    return arr;
    }
}
//Data in LocalStorage
function readData(data){
    //storing sata in local storage
var r=localStorage.setItem("regno",data[0]);
var f=localStorage.setItem("fname",data[1]);
var l=localStorage.setItem("lname",data[2]);
var d=localStorage.setItem("dob",data[3]);
var e=localStorage.setItem("email",data[4]);
var dt=localStorage.setItem("dept",data[5]);
var y=localStorage.setItem("year",data[6]);
//getting values from local to table
var r1=localStorage.getItem("regno",r);
var f1=localStorage.getItem("fname",f);
var l1= localStorage.getItem("lname",l);
var d1=localStorage.getItem("dob",d);
var e1=localStorage.getItem("email",e);
var dt1=localStorage.getItem("dept",dt);
var y1=localStorage.getItem("year",y);
var arr=[r1, f1, l1, d1, e1, dt1, y1];
return arr;
}
//insert
function insert(read){
    var row=table.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);

    //cell1.innerHTML="Hello";
    cell1.innerHTML=read[0];
    cell2.innerHTML=read[1];
    cell3.innerHTML=read[2];
    cell4.innerHTML=read[3];
    cell5.innerHTML=read[4];
    cell6.innerHTML=read[5];
    cell7.innerHTML=read[6];
    row.insertCell(7).innerHTML=`<button onclick=edit(this)>Edit</button>
    <button onclick=remove(this)>Delete</button>`;
    
}
//edit
function edit(td){
    row=td.parentElement.parentElement;//cell->row->(table)
    document.getElementById("regno").value=row.cells[0].innerHTML;//accesing element from array
    document.getElementById("fname").value=row.cells[1].innerHTML;
    document.getElementById("lname").value=row.cells[2].innerHTML;
    document.getElementById("dob").value=row.cells[3].innerHTML;
    document.getElementById("email").value=row.cells[4].innerHTML;
    document.getElementById("dept").value=row.cells[5].innerHTML;
    document.getElementById("year").value=row.cells[6].innerHTML;
    
    
}
//update
function update(){
    row.cells[0].innerHTML= document.getElementById("regno").value;
    row.cells[1].innerHTML= document.getElementById("fname").value;
    row.cells[2].innerHTML= document.getElementById("lname").value;
    row.cells[3].innerHTML= document.getElementById("dob").value;
    row.cells[4].innerHTML= document.getElementById("email").value;
    row.cells[5].innerHTML= document.getElementById("dept").value;
    row.cells[6].innerHTML= document.getElementById("year").value;
   row=null;
}
//delete
function remove(td){
    var ans =confirm("Are you sure you want to delete this record!");
    if(ans == true){
    row=td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    }
}