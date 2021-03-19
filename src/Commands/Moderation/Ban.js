const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Ban someone in a guild`,
            category: 'Moderation',
            usage: `<user> <reason>`,
            userPerms: ["BAN_MEMBERS"],
            botPerms: ["BAN_MEMBERS"],
            guildOnly: true,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        let guild = message.guild.name
        let target = message.mentions.members.first()
        if(!target) return message.reply("Please mention someone to ban!")
        if(target.id === message.author.id) {
            return message.reply("You cannot ban yourself ;-;")
        }

        let reason = args.slice(1).join(' ')
        if(!reason) return message.reply("Please give a reason!")

        let embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Member Banned")
        .setDescription("Moderation : Ban")
        .addField("Target", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        .setTimestamp()
        await target.ban({reason:reason})
        target.send(`You is been bannen from \"${guild}\"`)
        return message.channel.send(embed)
	}

};