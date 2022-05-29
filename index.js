// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];
  // console.log(arrPegawai)
  for (let data of arrPegawai){
    // console.log(`${data.namaDepan} ${data.namaBelakang}`)
    hasilLooping.push(`${data.namaDepan} ${data.namaBelakang}`)
  }
  // console.log(hasilLooping)

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = 0;
  for (let dataJK of arrPegawai){
    if (dataJK.jenisKelamin === "M"){
      jumlahPria += 1
    }
    // console.log(jumlahPria)
  }

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = 0;
  for (let dataJK of arrPegawai){
    if (dataJK.jenisKelamin === "F"){
      jumlahWanita += 1
    }
    // console.log(jumlahWanita)
  }

  // console.log(`Jumlah Pria = ${jumlahPria} dan Jumlah Wanita = ${jumlahWanita}`)

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = "";
  if (jumlahPria > jumlahWanita) {
    komentar = "Jumlah Pria Lebih Banyak Daripada Jumlah Wanita"
  }
  else if (jumlahWanita > jumlahPria){
    komentar = "Jumlah Wanita Lebih Banyak Daripada Pria"
  }
  else if (jumlahPria == jumlahWanita){
    komentar = "Jumlah Pria dan Wanita Berimbang"
  }
  console.log(komentar)

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);
  total = hasil.jumlahPria + hasil.jumlahWanita
  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(`Jumlah Pria = ${hasil.jumlahPria} dan Wanita = ${hasil.jumlahWanita} Total = ${total}`);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
