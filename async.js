let reach=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
        setTimeout(resolve,3000,"Reached")
    else
     reject("Not reached")
})

async function asyncstatus(){
    try{
    console.log("Wait  checking data");

    res=await reach
    console.log(res);
    console.log("Thank you for your visit.");
    }
    catch(err){
        console.log(err);
    }
}
asyncstatus()