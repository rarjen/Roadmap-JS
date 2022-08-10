function samplePromise() {
  return Promise.resolve("Kevin");
}

const data = await samplePromise();
console.info(data);

// akan success krn default function nodejs adalah async function
