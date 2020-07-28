
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
        out += '<tr> <td>' + data[i].nama +'</td> <td>' + data[i].warnaBulu +'</td>  <td>' + data[i].berat +'</td>  <td>' + data[i].umur +'</td>  <td>' + data[i].jenis +'</td>   <td><img width="50px" src="'+ data[i].foto +'"></td> <td> <input type="button" onclick="updateData(' + i + ')" value="edit" /> </td>  <td> <input onclick="deleteData(' + i + ')"  type="button" value="delete" /> </td>   </tr>'
    }

    var table = document.getElementById('table')

    table.innerHTML = out
}

function deleteData(index){
    var dataToDelete = data[index]
    var konfirmasi = confirm('Are You sure want to delete ' + dataToDelete.nama + ' ??')
    if(konfirmasi === true){
        data.splice(index,1)
        alert('Delete Data Success')
        showData()
    }
}

function showError(errorMessage){
    document.getElementById('error').innerHTML = errorMessage
}

function addData(){
    var inputs = document.getElementsByClassName('input-kucing-data')
    var namaKucing = inputs[0].value
    var warnaBulu = inputs[1].value
    var berat = inputs[2].value
    var umur = inputs[3].value
    var jenis = inputs[4].value
    var foto = inputs[5].value

    if(namaKucing && warnaBulu && berat && umur && jenis && foto){
        if(berat > 0 && umur > 0){
            var obj = new Kucing(namaKucing,warnaBulu,berat,umur,jenis,foto)
            data.push(obj)
            showData()
        }else{
            showError('Berat dan umur harus angka')
        }
    }else{
        showError('Form Masih ada yang kosong')
    }

    
}


function onCancelClick (){
    var inputs = document.getElementsByClassName('input-kucing-data')
    inputs[0].value = ''
    inputs[1].value = ''
    inputs[2].value = ''
    inputs[3].value = ''
    inputs[4].value = ''
    inputs[5].value = ''

    var btnCancel = document.getElementById('btn-cancel')
    btnCancel.style = 'display : none '

    var btnSubmit = document.getElementById('btn-submit')
    btnSubmit.value = 'Submit'

    btnSubmit.addEventListener('click',addData)
}

function onSaveClick (index){
    var inputs = document.getElementsByClassName('input-kucing-data')
    var namaKucing = inputs[0].value
    var warnaBulu = inputs[1].value
    var berat = inputs[2].value
    var umur = inputs[3].value
    var jenis = inputs[4].value
    var foto = inputs[5].value

    data[index].nama = namaKucing
    data[index].warnaBulu = warnaBulu
    data[index].berat = berat
    data[index].umur = umur
    data[index].jenis = jenis
    data[index].foto = foto

    showData()
    onCancelClick()
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

    var btnSubmit = document.getElementById('btn-submit')
    btnSubmit.value = 'Save'

    btnSubmit.removeEventListener('click',addData)
    btnSubmit.addEventListener('click', function() {onSaveClick(index) ;this.removeEventListener('click', arguments.callee);})

    var btnCancel = document.getElementById('btn-cancel')
    btnCancel.style = 'display : inline ' 

    btnCancel.addEventListener('click',onCancelClick)
    
    // get data yang mau di edit
}


showData()
document.getElementById('btn-submit').addEventListener('click',addData)




// var out = ''
// for(var i = 0 ; i < data.length ; i++){
//     out += '<h3>' + data[i].nama + '</h3>'
// }

// var namaKucingEl = document.getElementById('nama_kucing')
// namaKucingEl.innerHTML = out
