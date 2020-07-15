// Inheritance // Pewarisan properti dan method

// var kucing = {
//     hidupDi : "darat",
//     umur : 2,
//     makanan : 'daging',
//     berat : 1000,
//     warnaBulu : 'orange'
// }

// var kuda = {
//     hidupDi : 'darat',
//     umur : 2,
//     makanan : "rumput",
//     berat : 10000,
//     jenisKuda : 'poni',
//     kecepatan : 20,
// }

// var manusia = {
//     hidupDi : 'darat',
//     umur : 30,
//     makanan : "semuanya",
//     berat : 70000,
//     pekerjaan : 'karyawan',
//     penghasilan : '1jt'
// }


class MakhlukHidup{
    constructor(a,b,c,d){
        this.hidupDi = a
        this.umur = b
        this.makanan = c
        this.berat =d
    }
}

// kucing ==> child dari makhlukHidup as (parent)
class Kucing extends MakhlukHidup {
    constructor(a,b,c,d,e){
        super(a,b,c,d)
        this.warnaBulu = e
    }
}

class Kuda extends MakhlukHidup{
    constructor(a,b,c,d,e,f){
        super(a,b,c,d)
        this.jenisKuda = e
        this.kecepatan = f
    }
}


class Manusia extends MakhlukHidup{
    constructor(a,b,c,d,e,f){
        super(a,b,c,d)
        this.pekerjaan = e
        this.penghasilan = f
    }
}

// market ada product

class Product {
    constructor(nama, harga){
        this.nama = nama
        this.harga = harga
    }
}


class Buah extends Product{
    constructor(nama,harga,stock,tanggalExp){
        super(nama,harga)
        this.stock = stock
        this.tanggalExp = tanggalExp
    }
}


class Handphone extends Product{
    constructor(nama,harga,ram,brand,internalMemory){
        super(nama,harga)
        this.ramHandphone = ram
        this.brand = brand
        this.memory = internalMemory
    }
}


class HandphoneBekas extends Handphone{
    constructor(nama,harga,ram,brand,internalMemory,tahunBeli,kondisi,segel){
        super(nama,harga,ram,brand,internalMemory)
        this.tahunBeli = tahunBeli
        this.kondisi = kondisi
        this.segel = segel
    }
}
