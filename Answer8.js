let originalNumbers = [2,5,8,10,3] 
let newArray=[];
let i=0;
originalNumbers.forEach((number,index,arr)=>{
    if(number%2==0){
            newArray[i]=number;
            i++;
    }

})
console.log(newArray);










