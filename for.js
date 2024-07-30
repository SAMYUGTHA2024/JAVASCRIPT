arr=[10,20,"samyugtha",false];
for (i in arr){
    console.log(i);//prints index
}
for (i of arr){
    console.log(i);//prints value
}
arr.forEach((i) => {
    console.log(i);//prints value;
});