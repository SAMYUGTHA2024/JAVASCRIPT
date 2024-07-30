//self-call function
(function oddEven(){
    let a=100
    if(a%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

)()

//setTimeout
setTimeout( function()
{
    console.log("HELLO");
},5000
);

//setInterval
setInterval(function()
{
    console.log("HELLO");
},4000)


setInterval(() =>
{
    console.log("HELLO !");
}
 ,3000)