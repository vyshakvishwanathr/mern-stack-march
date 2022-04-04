//ARRAYS 1
let message=["javascript" ,"is","fun"]
let joinedmessage=message.join(" ")
console.log(joinedmessage)

//ARRAYS 2
const num=25468;
const str=num.toString();
console.log(str);
const result=[0,"-",str[0]];
console.log(result);
for(let i=1; i<str.length; i++){
  if((str[i-1]%2 === 0 && str[i]%2 === 0)){
    result.push('-', str[i]);
    }else{
      result.push(str[i]);
    }
}
console.log(result.join(""));


//ARRAYS 3
var arr1=[3,5,6,8,'a','a','b','a'];
var mostfrequent = 1;
var count = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 count++;
                if (mostfrequent<count)
                {
                  mostfrequent=count; 
                  item = arr1[i];
                }
        }
        count=0;
}
console.log(item+" ( " +mostfrequent +" times ) ") ;


//ARRAY4
const array = [1, 2, 3, 4, 5, 6];
let Sum = 0;
let Product = 1;
let i;
for (i = 0; i < array.length; i += 1) 
   {
    Sum += array[i];
    Product *= array[i];
    }
console.log(`Sum : ${s} Product :  ${p}`); 



//ARRAY 5
function removeduplicate(num){
    var x,
      len=num.length,
      out=[],
      obj={};
    for (x=0;x<len;x++){
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
return out;
}
var mynum=[1,2,4,5,4,7,8,8,7,9,6,5,2,1];
result=removeduplicate(mynum);
console.log(mynum);
console.log(result);






