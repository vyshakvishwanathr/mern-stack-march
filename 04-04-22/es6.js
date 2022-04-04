es6-2
let arr = [20,30,40];
new_arr = [...arr, 50,40,30];
console.log(new_arr);


es6-3
let user_details = {
    name : 'vyshak',
    id : 55,
    contact : 'vyshak@gmail.com'
}

let {name, id, contact} = user_details;
console.log(name, id, contact);
