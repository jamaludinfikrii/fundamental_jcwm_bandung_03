// ******* OBJECT
// sama aja kayak array, sama aja kayak variabel,
// fungsinya buat nyimpen data
// tempat nyimpen data ==> CRUD (Create Read Update Delete)
// ?? karena data dari database itu dikirimnya dalam bentuk object || array of object



// ********* CREATE
// Kenapa mesti pake object
// ada data siswa, namanya budi, umurnya 30, jenis kelamin lelaki
var namaSiswa = 'Budi'
var umurSiswa = 30
var jenisKelamin = 'lelaki'


// Object Literal
var siswa = {
    nama : "budi",
    umur : 30,
    jenisKelamin : 'lelaki',
    printData : function(){
        console.log(this.nama + ' ' + this.umur)
    }
}

var siswa2 = {
    nama : "budi",
    umur : 30,
    jenisKelamin : 'lelaki'
}
// [nama, umur, kelamin ] ==> property
// [budi, 30, lelaki] ==> value

// Object New
var siswa2 = new Object()
siswa2.nama = 'andi'
siswa2.umur = 40
siswa2.jenisKelamin = 'lelaki'

// console.log(siswa)
// console.log(siswa2)


// Object Class
// Cetakan untuk bikin object
// untuk Bikin object banyak dengan property yang sama


class Siswa {
    constructor(a,b,c){
        this.nama = a;
        this.umur = b;
        this.jenisKelamin = c
    }
}



var siswa2 = new Siswa('seto',40,'pria')
var siswa3 = new Siswa('andi',50,'pria')





// ******** METHOD 


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





var post2 = new BlogPost('Tutorial Memasak enak','this is body','chef')
// post2.printBlogTitle()
// post2.changeTitle('Tutorial Bikin Kue')
// post2.printBlogTitle()




// ********* READ
var siswa1 = new Siswa('budi',30,'pria')
// console.log(siswa1)
// console.log(siswa1.nama)
// console.log(siswa1.umur)
// console.log(siswa1.jenisKelamin)

// console.log('Nama Saya ' + siswa1.nama + ', umur ' + siswa1.umur + ' tahun, saya seorang ' +  siswa1.jenisKelamin )



// ********* UPDATE

var post1 = new BlogPost('Fundamental Javascript','this is body','fikri')
post1.writer = 'Seto'
post1.printBlogTitle()
post1.publishDate = '28-09-2020'
console.log(post1)

// *********** DELETE

delete post1.publishDate
post1.writer = null
console.log(post1)


