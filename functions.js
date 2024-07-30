//with parameter and without return type
var votingEligilibility=(age)=>{
    if(age>=18){
          console.log("Eligible to Vote");
        }
        else{
        console.log("Not  Eligible to Vote");

    }
}
votingEligilibility(20);
//with parameter and with return type
var votingEligilibility = (age) =>{
    if(age>=18){
          return("Eligible to Vote");
    }
    else{
         return("Not Eligible to Vote");

    }
}
console.log(votingEligilibility(11));

//without parameter and with return type
var votingEligilibility = () =>{
    age=15;
    if(age>=18){
          return("Eligible to Vote");
    }
    else{
         return("Not Eligible to Vote");

    }
}
console.log(votingEligilibility());
//without parameter and without return type
var votingEligilibility = () =>{
    age=35;
    if(age>=18){
          console.log("Eligible to Vote");
    }
    else{
         console.log("Not Eligible to Vote");

    }
}
(votingEligilibility());









