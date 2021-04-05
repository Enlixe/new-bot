const Command = require('../../Structures/Command.js');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Warns user`,
            category: 'Moderation',
            usage: `<user>`,
            userPerms: [`ADMINISTRATOR`],
            botPerms: [`ADMINISTRATOR`],
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        let warns = JSON.parse(fs.readFileSync(`${__dirname}/warnings.json`, "utf8"))

        const wUser = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!wUser) {
            return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reason>")
        }
        
        let reason = args.join(" ").slice(22);
        if (!reason) reason = "No reason provided"

        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        }

        warns[wUser.id].warns++

        fs.writeFile(`${__dirname}/warnings.json`, JSON.stringify(warns), (err) => {
            if(err) console.log(err)
        })

        let embed = new MessageEmbed()
        .setColor("RED")
        //.setAuthor(message.author.username)
        .setDescription("**Warns**")
        .addField("Warned User:", `<@${wUser.id}>`)
        .addField("Numbers of Warnings:", `${warns[wUser.id].warns}`)
        .addField("Reason:", reason)

        message.channel.send(embed)

	}

};