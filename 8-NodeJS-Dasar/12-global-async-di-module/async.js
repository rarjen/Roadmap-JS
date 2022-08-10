function samplePromise() {
  return Promise.resolve("Kevin");
}

async function run() {
  const data = await samplePromise();
  console.info(data);
}

// error, krn .js secara default functionnya bukan async
// agar tidak error kita bisa buat async function / file module (.mjs)

run();
