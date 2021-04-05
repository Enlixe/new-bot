const Command = require('../../Structures/Command.js');
const moment = require('moment');
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `.`,
            category: 'Owner',
            ownerOnly: true,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        let creating = await message.channel.send("Creating . . .");
        let changecontent = args.join(" ")
        message.delete()
        creating.delete()
        let embed = new MessageEmbed()
        .setColor("GREEN")
        //.setAuthor("Restarting")
        .addField("Restarting", [
            "\u200b",
            changecontent,
            "\u200b"
        ])
        //.setDescription(changecontent)
        .setFooter(`By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send(embed)
	}

};