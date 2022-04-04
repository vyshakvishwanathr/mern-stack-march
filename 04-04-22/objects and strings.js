//OBJECTS AND STRINGS 1
var objects = {
    name : "VYSHAK", sclass : "JOBDOST", rollno : 2
} 
var size = Object.keys(objects).length;
console.log(size);

//OBJECTS AND STRINGS 2
var string="vyshak";
console.log(string.charAt(0).toUpperCase()+string.slice(1));



//OBJECTS AND STRINGS 3
let firstname="vyshak";
let lastname="vishwanath";
fname=firstname.concat(lastname);
console.log(fname);


//OBJECTS AND STRINGS 4
let wrongname="vshak";
let missingletter="y";
console.log(wrongname.slice(0,1)+missingletter+ wrongname.slice(1));


//OBJECTS AND STRINGS 5
 let string = 'vyshakvishwanath';
 let n = 2;
 let arr = [];
 let j = 0;
 for(i=0; i<string.length; i= i+n){
     arr[j] = string.slice(i,i+n);
     j++;
 }
 console.log(arr);



//OBJECTS AND STRINGS 6
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));


//OBJECTS AND STRINGS 7
let A="vyshak";
a=A.repeat(2);
console.log(a);


//OBJECTS AND STRINGS 8
function subStrAfterChars(str, char, pos)
{
  if(pos=='b')
   return str.substring(str.indexOf(char) + 1);
  else if(pos=='a') 
   return str.substring(0, str.indexOf(char));
  else
  return str;  
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));

console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));


//OBJECTS AND STRINGS 9
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));


//OBJECTS AND STRINGS 10
const searchWord = (text, word) => {
    var x = 0, y=0;
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return x;
}

let string = 'the bike is very nice. the car is very nice';
search_string = 'the';
console.log(searchWord(string, search_string));