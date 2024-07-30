function formValid(){
   setTimeout(()=>{console.log("Validation started");
   formValidation();},2000);
}
function formValidation(){
    console.log("Validation Completed!");
}
formValid();