const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Kick user from a guild`,
            category: 'Moderation',
            usage: `<user> <reason>`,
            userPerms: ["KICK_MEMBERS"],
            botPerms: ["KICK_MEMBERS"],
            guildOnly: true,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        let target = message.mentions.members.first()
        if(!target) return message.reply("Please mention someone to kick!")
        if(target.id === message.author.id) { return message.reply("You cannot kick yourself ;-;") }

        let reason = args.slice(1).join(' ')
        if(!reason) return message.reply("Please give a reason!")

        let embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Member kicked")
        .setDescription("Moderation : Kick")
        .addField("Target", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        .setTimestamp()
        await target.kick(reason)
        return message.channel.send(embed)
	}

};