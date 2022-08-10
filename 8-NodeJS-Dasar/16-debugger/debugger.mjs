function sayHello(nama) {
  debugger;
  return `Hello ${nama}`;
}

const firstName = "otniel";
debugger;
console.info(sayHello(firstName)); // program akan deksekusi sampai sini, lalu masuk kdlm function dan menemukan debugger

// jika ada debugger diluar function maka akan di deteksi dlu, krn debugger dalam function akan berjalan apabila sudah dipanggil
