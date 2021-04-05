const Command = require('../../Structures/Command.js');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
                  aliases: ['warnlevel'],
                  description: `See how much user warnings`,
                  category: 'Moderation',
                  usage: `[user]`
		});
	}

	async run(message, args) {
        // Command Here
        let warns = JSON.parse(fs.readFileSync(`${__dirname}/warnings.json`, "utf8"))

        const wUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(!wUser) {
            return message.channel.send("Please Mention the person to who you want to see warnings | warnings @mention")
        }

        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        }
        let warnlevel = warns[wUser.id].warns;

        let embed = new MessageEmbed()
        .setColor("BLUE")
        //.setAuthor(message.author.username)
        .setDescription(`<@${wUser.id}>** has ${warnlevel} warnings.**`)

        message.channel.send(embed)

	}

};