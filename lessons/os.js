const os = require("os");
const cluster = require("cluster");

/*console.log("Платформа", os.platform());
console.log("Архитектура", os.arch());
console.log("Процессор", os.cpus());*/

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
        console.log(`CPUcore: Процесс запущен`);
    }
    cluster.on("exit", (worker) => {
        console .log(`Воркер с pid= ${worker.process.pid} умер`);
        cluster.fork()
    })
} else {
    console.log(`Воркер с pid= ${process.pid} запущен`);

    setInterval(() => {
        console.log(`Воркер с pid= ${process.pid} еще работает`);
    }, 5000)
}

