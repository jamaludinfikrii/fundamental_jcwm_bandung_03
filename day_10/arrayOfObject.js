// Array Of Object ==> Array Isinya Object
// ? buat nyimpen data object dalam jumlah yang banyak
// ? Nanti Database dikirim ke aplikasi dengan format Array Of Object

// *************** CREATE

class BlogPost {
    constructor(title,body,author){
        this.title = title
        this.bodyPost = body
        this.writer = author
        // method ==> properti yang isinya function
        this.printBlogTitle = function (){
            console.log(this.title + ' by ' + this.writer)
        }
        
        this.changeTitle = function (newTitle){
            this.title = newTitle
        }
    }
}


var dataPost = [
    new BlogPost('Javascript Fundamental','ini body','fikri'),
    new BlogPost('Javascript Advance','ini body','seto'),
    new BlogPost('React js Advance','ini body','budi')
]


var data = [
    {username : 'fikri',password : '123123'},
    {username : 'seto',password : '143'},
    {username : 'budi',password : 'rahasia'},
    {username : 'andi',password : 'qwerty'},
    {username : 'setyo',password : 'asdfg'},
]
// ************* READ

// console.log(data[0].username + ' dengan password ' + data[0].password)
// console.log(data[1].username + ' dengan password ' + data[1].password)
// console.log(data[2].username + ' dengan password ' + data[2].password)

// for(var i = 0 ; i < data.length ; i ++){
//     console.log(data[i].username + ' dengan password ' + data[i].password)
// }


// ************ UPDATE

data[0].username = 'sesuatu'

// for(var i = 0 ; i < data.length ; i ++){
//     console.log(data[i].username + ' dengan password ' + data[i].password)
// }


// ************* DELETE

data.splice(0,1)
for(var i = 0 ; i < data.length ; i ++){
    console.log(data[i].username + ' dengan password ' + data[i].password)
}