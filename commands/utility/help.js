var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dcf104`)
    .setAuthor("Help Menu")
    
    .addField(`** ❯ MODERATION [11]**`,"`Ban`,`Kick`,`vcmove`,`smove`,`voicekick`,`lock`,`unlock`,`Unban`,`Mute`,`Purge`,`Hackban`")
    .addField(`** ❯ SETUP SYSTEM [4]**`,"`setmodlog`,`setmute`,`setnick`,`slowmode`" )
    .addField(`** ❯  MANAGEMENT [4]**`, "`role`,`roleadd`,`roledel`,`rolecreate`,`deleterole`,`createvc`,`createchat`,`delchannel`")
    .addField(`>** ❯ MISCELLANEOUS [6]**`,"`help`,`invite`,`uptime`,`av`,`av2`,`stats`" )
    .addField(`** ❯ TEXT SYSTEM [3]**`,"`embed`,`announce`,`imageannounce`")
    .addField(`** ❯ UTILITY [12]**`,"`membercount`,,`steal`,`define`,`docs`,`weather`,`qr`,`github`,`applestore`,`anime`,`linkshorten`,`playstore`,`country`,`ascii`,`emojiid`,`vaportext`")
    .addField(` ** ❯ INFO'S [3]**`,"`channelinfo`,`roleinfo`,`whois`")
    .addField(` ** ❯ FUN [12]**`,"`kiss`,`hug`,`pat`,`zaglo`,`slap`,`smug`,`tickle`,`poke`,`binary`,`calculate`,`lovecal`,`meme`,`advice`,`scroll`")
    .addField(` ** ❯ IMAGE [8]**`,"`triggered`,`delete`,`rip`,`jail`,`captcha`,`wideavatar`,`toilet`,`wa`,`clyde`,`wasted`,`effect`,`tweet`,`minecraft`,`blur`,`beautiful`,`catsay`,`cowsay`,`fliptext`")
    .addField(` ** ❯ LINKS [2]**`,`   [Invite Me](https://discord.com/oauth2/authorize?client_id=831133255860093008&permissions=8&scope=bot)`+` - `+`[Support Server](https://discord.gg/Cyz93ptgat)`)
    .setFooter("© Dark Devolopers")
    .setTimestamp()

message.channel.send(log);
}
}
}
