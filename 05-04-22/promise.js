//PROMISE 1
const result = new Promise((resolve, reject) => {
    let message = "hello";
    setTimeout(() => {
        resolve(message);
    }, 1000);
})
Promise.all([result]).then((res)=>{
    console.log(res);
})

//PROMISE 2
const result = new Promise((resolve, reject) => {
    let message = "resolved";
    setTimeout(() => {
        resolve(message);
    }, 1000);
})
Promise.all([result]).then((res)=>{
    console.log(res);
})

//PROMISE 3
const resolved = (num) => {
    num = "RESOLVED!";
    console.log(num);
}

const rejected = (num) =>{
    num = "REJECTED!";
    console.log(num);
}
const process = new Promise((resolve, reject) => {
    let num = 5;
    if(num>10){
        resolve(num);
    }
    else{
        reject(num);
    }
})

process.then((num) => resolved(num)).catch((num) => rejected(num));

//PROMISE 5
const result = new Promise((resolve, reject) =>{
    let message = "Hello!";
    setTimeout(()=> {
        reject(message);
    }, 1000); setTimeout
})

Promise.all([result]).catch((res)=>{
    console.log(res);
})


//PROMISE 7
const resolved = new Promise((resolve, reject) =>{
    let message = "RESOLVED!";
    setTimeout(()=> {
        resolve(message);
    }, 1000); setTimeout
})

const rejected = new Promise((resolve, reject) =>{
    let message = "REJECTED!";
    setTimeout(()=>{
        resolve(message);
    }, 2000); setTimeout
})

Promise.all([resolved, rejected]).then((res)=>{
    console.log(res);
})