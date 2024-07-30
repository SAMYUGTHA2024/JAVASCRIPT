async function a()
{
    await b()
  setTimeout(() =>  {
 
    console.log("ABC")
},2000);
}
 async function b()
{
    await c()
    setTimeout(() =>  {
 
        console.log("BCD")
    },1000);
}
async function c()
{
  console.log("CDE");  
}
a();