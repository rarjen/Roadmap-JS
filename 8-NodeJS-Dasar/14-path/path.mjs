import path from "path";

const file = "/Users/otnie/contoh.txt"; // hanya dummy directory

console.info(path.dirname(file)); // /Users/otnie
console.info(path.basename(file)); // contoh.txt
console.info(path.extname(file)); // .txt

// Berguna utk mengesktrak informasi yg berhubungan dg file

// Bila kita ingin memanipulasi file, contoh membuat file, memasukkan data ke file bukan didalm module path ini
// akan dibahas pada Module File System
