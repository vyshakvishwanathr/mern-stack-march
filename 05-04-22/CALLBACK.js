//CALLBACK 1
function check (num) {
    if(isNaN(num))
    {
        console.log("false");
        return false;
     }
     else
     {
        console.log("true");
        return true;
     }
    }
    function number (callback){
        let num = "2";
        callback(num);
    }
    
    number(check);


//CALLBACK 2
function adder(str,str1){
    let str2=str.concat(str1);
    console.log(str2);
}
function sender(callback){
    str="vyshak";
    str1="!";
    callback(str,str1);
}
sender(adder);

//CALLBACK 3
function duplicate (str,firstChar){
    for (let i=0;i<str.length;i++)
    {
         firstChar+=(str.charAt(i)+str.charAt(i));
         
    }
    console.log(firstChar);
}

function combiner (callback)
{
    str = "abc";
    firstChar = " ";
    callback(str,firstChar);
}
combiner(duplicate)


//CALLBACK 4
const check = (arr) => {
    if (arr.length <= 2){
        return false;
    }
    else{
        return true;
    }
}

arr = [1,2];
arr1 = [1,2,3];
const atLeastTwo = (arr, callback) => {
    if(callback(arr)){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

atLeastTwo(arr, check);
atLeastTwo(arr1, check);




//CALLBACK 5
arr=[1,2,3,4,45];
const groupBy=(callback)=>{
    var a=[],b=[];
    arr.map(el=>{
    if(callback(el)=='less'){
      a.push(el);
    }
    else{
       b.push(el);
    }
})
console.log(a,b)
}
const hs=(el)=>{
    if(el<5) return "less";
    else return "more";
    }
groupBy(hs);

