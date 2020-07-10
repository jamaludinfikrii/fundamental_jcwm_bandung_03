// Function ==> block of code can be named and reused and maintanable
// Function ada dua tahap ==>  build && call
// dibuild sekali dan bisa di call berkali kali
// Syntax



//  build || initialize
function Hello(){
    console.log('Hello fikri')
    // block of code
}

// call || invokes
// Hello()
// Hello()
// Hello()
// Hello()


// ********** Type of Function

// function declaration
function Hello(){
    console.log('Hello fikri')
    // block of code
}


// function expression
var Hello = function(){
    console.log('Hello Fikri')
}


// ********** Function With Parameter (Arguments)
// function lebih fleksibel ==> bisa nerima data
// 
function sapa(a){
    console.log('Hello ' + a)
}

// sapa('Fikri')
// sapa('Seto')

// bisa bikin function lebih dari satu parameter

function penjumlahan(angka1,angka2){
    console.log(angka1 + angka2)
}


function operator(angka1,angka2,op){ // declare variable tapi gak ada valuenya
    if(op == '+'){
        console.log(angka1 + angka2)
    }else if(op == '-'){
        console.log(angka1 - angka2)
    }else if(op =='x'){
        console.log(angka1 * angka2)
    }else if(op == ':'){
        console.log(angka1 / angka2)
    }else{
        console.log('Operator hanya boleh + , - , x atau :')
    }
}





// operator(10,20,"x") // proses assign variable nya



// ********* RETURN FUNCTION
// function boleh return sesuatu boleh enggak
// function itu ada dua tipe
// ==> function yang mengerjakan sesuatu
// ==> function yang menghasilkan sesuatu (return)
// digunakan untuk membuat function yang akan di proses lagi 


function Hello3(){
    return 'Hello world'
}


function Hello2(){
    console.log("Hello world")
}


// var hasil = Hello2() + 'fikri'
// console.log(hasil)



function operator2(angka1,angka2,op){ // declare variable tapi gak ada valuenya
    if(op == '+'){
       return angka1 + angka2
    }else if(op == '-'){
       return angka1 - angka2
    }else if(op =='x'){
       return angka1 * angka2
    }else if(op == ':'){
       return angka1 / angka2
    }else{
       return 'Operator hanya boleh + , - , x atau :'
    }
}


var hasil = operator2(10,20,'x') + ' adalah jumlah dari seluruh rakyat di desa ini'
console.log(hasil)







function hello(){
    console.log('Hello world')
}


function hello2(print){
    console.log(print)
}

















