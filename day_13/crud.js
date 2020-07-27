
// =========================== DATA ==================
class Kucing{
    // initializer
    constructor(nama,bulu,berat,umur,jenis,foto){
        this.nama = nama
        this.warnaBulu = bulu
        this.berat = berat
        this.umur = umur
        this.jenis = jenis
        this.foto = foto
    }
}

var data = [
    new Kucing('Ujang','hitam',2,2,'kampung','https://kucingpedia.com/wp-content/uploads/2018/01/Gambar-Kucing-Hitam-Menjulurkan-Lidahnya.jpg'),
    new Kucing('Caca','Pink',3,2,'kampung','https://cdn2.tstatic.net/aceh/foto/bank/images/kucing-warna-pink_20150915_173502.jpg'),
]


function showData(){
    var out = `<tr>
                <td>Nama</td>
                <td>Warna Bulu</td>
                <td>Berat</td>
                <td>Umur</td>
                <td>Jenis</td>
                <td>Foto</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>`
    for(var i = 0 ; i < data.length ; i ++){
        out += '<tr> <td>' + data[i].nama +'</td> <td>' + data[i].warnaBulu +'</td>  <td>' + data[i].berat +'</td>  <td>' + data[i].umur +'</td>  <td>' + data[i].jenis +'</td>   <td><img width="50px" src="'+ data[i].foto +'"></td> <td> <input type="button" onclick="updateData(' + i + ')" value="edit" /> </td>  <td> <input type="button" value="delete" /> </td>   </tr>'
    }

    var table = document.getElementById('table')

    table.innerHTML = out
}

function addData(){
    var inputs = document.getElementsByClassName('input-kucing-data')
    var namaKucing = inputs[0].value
    var warnaBulu = inputs[1].value
    var berat = inputs[2].value
    var umur = inputs[3].value
    var jenis = inputs[4].value
    var foto = inputs[5].value

    var obj = new Kucing(namaKucing,warnaBulu,berat,umur,jenis,foto)
    data.push(obj)
    showData()
}


function updateData(index){
    
    var dataToEdit = data[index]
    var inputs = document.getElementsByClassName('input-kucing-data')
    inputs[0].value = dataToEdit.nama
    inputs[1].value = dataToEdit.warnaBulu
    inputs[2].value = dataToEdit.berat
    inputs[3].value = dataToEdit.umur
    inputs[4].value = dataToEdit.jenis
    inputs[5].value = dataToEdit.foto
    
    // get data yang mau di edit
}


showData()




// var out = ''
// for(var i = 0 ; i < data.length ; i++){
//     out += '<h3>' + data[i].nama + '</h3>'
// }

// var namaKucingEl = document.getElementById('nama_kucing')
// namaKucingEl.innerHTML = out
