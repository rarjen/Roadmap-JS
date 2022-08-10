// Blocking (synchronous)
/*
import fs from "fs";
fs.readFileSync("file-system.mjs", callback);
*/

// Non-blocking (asynchronous/promise)

import fs from "fs/promises";

// jika tanpa keyword await sblm fs maka akan melakukan balikan berupa object Promise (Promise) : [object Promise]
const buffer = await fs.readFile("file-system.mjs"); // membaca file isi file
console.info(buffer.toString()); // membaca isi file

// membuat dan menulis file
await fs.writeFile("temp.txt", "Hello World"); // krn promise maka ditambahkan keyword await

const buffer2 = await fs.readFile("temp.txt"); // membaca file isi file
console.info(buffer2.toString());

// Copy file
try {
  await fs.copyFile("temp.txt", "tempCopy.txt");
  console.info("temp.txt was copied to tempCopy.txt");
} catch (err) {
  console.info(`The file couldn't be copied : ${err}`);
}

// membuat file
try {
  await fs.mkdir("file");
  console.info("file has been made");
} catch (error) {
  console.info(`The file couldn't been made : ${err}`);
}

// mengubah nama file / folder
try {
  await fs.rename("file", "file2");
  console.info("file was changed to file2");
} catch (error) {
  console.info(`The file couldn't be changed : ${err}`);
}

// ini adl Sebuah module untuk mengolah file
