


let pegawai =[ {
    NIP: "001",
    nama: "Amir Mahmud",
    jabatan: "CE",
    alamat: "Jl. suka suka"
}, {
    NIP: "002",
    nama: "Amir Mahmuddd",
    jabatan: "Karyawan 1",
    alamat: "Jl. suka suka"
},{
    NIP: "001",
    nama: "Amir Mahmudddd",
    jabatan: "Karyawan 2",
    alamat: "Jl. suka suka"
}
]

let karyawan = [pegawai[0].jabatan,pegawai[1].jabatan,pegawai[2].jabatan]
let gaji = []

karyawan.forEach((item)=>{
    switch (item) {
        case "CEO":
            gaji.push(50000000)
            break;
        case "Karyawan 1":
            gaji.push(4000000)
            break;
        case "Karyawan 2":
            gaji.push(5000000)
            break;
        default:
            break;
    }
})


var totalGaji = gaji.reduce((a, b) => a+b, 0)

console.log(totalGaji);
btnClick = () =>{

    

pegawai.map((item)=> {
    document.getElementById("karyawan").innerHTML += item.nama + " " + item.alamat + " " + item.jabatan +"<br>";    
})    
document.getElementById("gaji").innerHTML =   `Total gaji seluruh karyawan adalah :`+totalGaji;

}

