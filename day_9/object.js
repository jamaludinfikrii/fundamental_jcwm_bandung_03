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


// contoh array of object
var siswaSiswa = [
    {nama : 'budi',umur : 40, jenisKelamin : 'lelaki'},
    {nama : 'andi',umur : 20, jenisKelamin : 'lelaki'},
    {nama : 'seto',umur : 10, jenisKelamin : 'lelaki'},
    {nama : 'setyo',umur : 20, jenisKelamin : 'lelaki'},
]



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





// ********* READ


var siswa1 = new Siswa('budi',30,'pria')
console.log(siswa1)
console.log(siswa1.nama)
console.log(siswa1.umur)
console.log(siswa1.jenisKelamin)
siswa1.nama = 'andi'
delete siswa1.nama

console.log('Nama Saya ' + siswa1.nama + ', umur ' + siswa1.umur + ' tahun, saya seorang ' +  siswa1.jenisKelamin )