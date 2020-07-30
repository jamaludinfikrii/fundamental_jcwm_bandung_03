
var buttonsss = document.getElementById('button')


function searchPersegi(){
    var total = document.getElementById('total').value
    var output = ''

    for(var i = 0; i < total; i++){
        for(var j = 0; j < total; j++){
            output += '* '
        }

        output += "<br>"
    }

    document.getElementById('result').innerHTML = output
}

function searchSegitiga1(){
    var total = document.getElementById('total').value
    var output = ''

    for(var i = 0; i < total; i++){
        for(var j = 0; j <= i; j++){
            output += '* '
        }

        output += "<br>"
    }

    document.getElementById('result').innerHTML = output
}

//   *
//  **
// ***
function searchSegitiga2(){
    var total = document.getElementById('total').value
    bintang = 1
    var output = ''

    for(var i = 0; i < total; i++){
        for (var j = 0; j < total-i; j++){
            output += "&nbsp&nbsp&nbsp"
        }
    
        for(var k = 0; k < bintang; k++){
            output += ' * '
        }
    
        bintang++
        output += "<br>"
    }
    
    document.getElementById('result').innerHTML = output
}

function menu(){
    var menu = document.getElementById('menu').value

    if(menu == 1){
        searchPersegi()
    }else if(menu == 2){
        searchSegitiga1()
    }else if(menu == 3){
        searchSegitiga2()
    }else{
        alert('( ! ) Menu Tidak Sesuai')
    }
}

buttonsss.addEventListener('click', function (){return menu()})