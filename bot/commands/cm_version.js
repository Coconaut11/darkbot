module.exports = {
    descr: "Devuelve la version actual del bot.",
    roles: ["@everyone"],
    exec: (message) => {
        message.author.sendMessage(`El bot se encuentra en la versión ${global.config.version}`);
        message.delete();
    }
}
