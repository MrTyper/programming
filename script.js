"use strict"
// functions 
let number = 20;
function firstfunction(text){
console.log(text);
number = 10;
}
firstfunction("Hello World!");
console.log(number);

function calculator(a,b){
    return a+b;
}
console.log(calculator(10,2));
console.log(calculator(10,4));
console.log(calculator(13,2));


function ret(){
    let number = 20;


    //
    return number;
}
const anotherNum = ret();
console.log(anotherNum);

const bio = function(){
console.log("Hello World!");
};
bio();

function first(text){
    console.log(text);
}
first("Hello World!");
const second = function(a,b){
return a+b
}
console.log(second(2,4))
second();

function returno(){
    let numberso = 6;


    return numberso
}
const anothers = returno();
console.log(anothers);


function first1(){
setTimeout(function(){
    console.log(1);
},500)
}

function second(){
    console.log(2);
}
first1();
second();

function learner(lang,callback){
console.log(`I learn:${lang}`);
callback();
}

learner('JavaScript',function(){
console.log("I finished this lesson!");
});

function my(lang,callback){
console.log(`I learn ${lang}`);
callback();
}

function finished(){
    console.log("finished ")
}
my('js',finished);


function ss(){
    setTimeout(function(){
        console.log("my first commit");
    },500)
}
ss();
function ds(){
    console.log("my");
}
ds();


function own(lang,callback){
    console.log(`I learned Js${lang}`);
    callback();
}
function doned(){
    console.log("worked");
}
own('hello',doned);

const options = {
name:'Otabek',
width:70,
height:175,
colors:{
    border:'black',
    width:22,
}
};
// delete options.name;
// // console.log(options);
// for(let key in options){
//     console.log(`This option has ${key} and this is  strict of it ${options[key]}`);
// }
const easyToLearn = {
name:'Otabek',
width:70,
height:175,
colors:{
    color:'black'
},
Test: function(){
console.log("Hello!")
}
};
easyToLearn.Test();
const{color} = easyToLearn.colors;
console.log(color);



for(let key in easyToLearn){
    if(typeof(easyToLearn[key])==='object'){
        for(let i in easyToLearn[key]){
            console.log(`This is property ${i} and this is option ${easyToLearn[key][i]}`);
            
        }
    }else{
        console.log(`This is property ${key} and this is option ${easyToLearn[key]}`);
       
    }
}
console.log(Object.keys(easyToLearn).length);
