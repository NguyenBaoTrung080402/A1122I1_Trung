
var fullName = 'David Join';
var age = 26;
var age1 = 20;
var a = 1;

//gọi hàm thông báo 
alert(fullName) ;
alert(age);

// sử dụng console
console.log(fullName);
console.warn (123);
console.error(age)

// sử dụng confirm
confirm('xác nhận bạn đủ tuổi')
prompt ('Xác nhận bủ đủ tuổi ')

// hàm settimeout
/*
    có nghĩa là cho 1 đoạn code chạy trong setTimeout
    thực thi các câu lệnh trong 1 quãng thời gian nhất định 

*/
setTimeout (function(){
    alert('thong bao')
}, 1000)


/*
hàm setInterval
là chạy 1 đoan code sau 1 quãng thời gian và nó lặp đi lặp lại 

*/ 
setInterval(function(){
    console.log('anh yeu em'+Math.random)
}, 1000)

if(age > age1){
    var sum = age + age1;
    console.log(sum);
}
var firstName = 'Trung';
var midName = 'Bao';
var lastName = 'Nguyen';

console.log(lastName+' '+ midName+' '+ firstName);

/**
 * 1. Dữ liệu nguyên thuỷ -
 * - number
 * - String 
 * - boolean
 * - undefined
 * - null
 * - symbol
 * 2. Dữ liệu phức tạp 
 *  - Functions
 *  - Object
 * 
 */

// number type 
var a = 1 ; 
var b = 2; 
var c = 1.5;

console.log(typeof a);

//String type 
var fullName = 'Trung Nguyen'

console.log(typeof fullName);


//boolean type 
var isSuccess = true ;

// Undefine type 
var age2 ;

//null type 
var isNull = null; //nothing 

// Sympol

var id = Symbol('id')
var id2 = Symbol('id')

//Function

var myFunction = function(){
    alert('Hi. xin chao cac ban')
}

//Object types
var myObject = {
    name: 'Trung',
    age: 20,
    address: 'Ha Noi',
    myFunction: function(){

    }
}
console.log('myObject', myObject);

var myArray= [
    'jvs',
    'PHP',
    'Ruby'
];
console.log(myArray);

// làm việc với hàm 

function showDialog(){
    alert ('Hi xin chao cac ban');
}

showDialog ();


// làm việc khi truyền tham số 

function write(messe){
    console.log(messe)
}

write('Hí anh em :33');

//làm việc với arguments
function wigtLog(){
    console.log(arguments);
}

wigtLog('Log 1', 'log 2')

//lam viec voi for 

function writeLog(){
    var myString = '';
    for (var pram of arguments){
        myString += `${pram} - `
    }
    console.log(myString)
}
writeLog('log 1', 'log 2', 'log 3');

// ham return

function sum(a, b) {
    return a + b;
}
var result = sum(20, 10);
console.log(result)