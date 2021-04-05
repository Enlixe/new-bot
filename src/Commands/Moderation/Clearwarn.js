const Command = require('../../Structures/Command.js');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
                  aliases: [],
                  description: `Clear user warn`,
                  category: 'Moderation',
                  usage: `<user>`
		});
	}

	async run(message, args) {
        // Command Here
        let warns = JSON.parse(fs.readFileSync(`${__dirname}/warnings.json`, "utf8"))

        const wUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!wUser) {
            return message.channel.send("Please Mention the person to who you want to see warnings | clearwarn @mention")
        }

        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        }
        let warnlevel = warns[wUser.id].warns;
        let oldwarn = warnlevel;
        if (warnlevel == 0) return message.reply("User had 0 warn. Cant clear")

        // Clearing warn
        
        warns[wUser.id] = {
            warns: 0
        }

        fs.writeFile(`${__dirname}/warnings.json`, JSON.stringify(warns), (err) => {
            if(err) console.log(err)
        })

        let embed = new MessageEmbed()
        .setColor("BLUE")
        //.setAuthor(message.author.username)
        .setDescription(`**Cleared \`${oldwarn}\` warnings for** <@${wUser.id}>`)

        message.channel.send(embed)

	}

};