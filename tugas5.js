var AK = 3;
var Max = 20;
var array = [];

for(var i=0; i<Max-1; i++){
    if((i%AK==0)){
        array.push(i);
    }
}
console.log(array)