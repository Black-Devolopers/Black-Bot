const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    setInterval(() => bot.user.setActivity(`${prefix}`, { type: "WATCHING"}),5000)
};
