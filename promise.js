function isLoc(loc,time){
    loca="SKCT"
    t=2000
    if(loca == loc && t<=time){
        return true;
    }
    else{
        return false;
    }
}
function locationFinder(){
    time=2000
    loc="SKCET"
    return new Promise((locFound, locNotFound) => {
        setTimeout(() => {
            if(isLoc(loc,time)){
                 locFound("Location Found");
            }
            else{
                locNotFound("Location Not Found");
            }
        },time);
    })
    
}
locationFinder().then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
})