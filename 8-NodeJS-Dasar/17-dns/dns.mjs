import dns from "dns/promises";

try {
  const address = await dns.lookup("www.youtube.com");

  console.info(address.address); // 74.125.24.3
  console.info(address.family); // 4
} catch (error) {
  console.info(error);
}
