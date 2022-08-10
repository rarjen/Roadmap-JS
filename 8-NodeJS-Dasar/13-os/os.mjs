import os from "os";

console.info(os.platform());
console.info(os.arch());
console.info(os.cpus());
console.info(os.uptime()); // print waktu komputer menyala (milis)
console.info(os.totalmem()); // print total memory
console.info(os.freemem()); // print free memory tersedia
console.info(os.networkInterfaces()); // print network information
