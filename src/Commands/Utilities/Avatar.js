const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Displays someone's avatar!`,
            category: 'Utilities',
            usage: `[user]`,
            guildOnly: true
		});
	}

	async run(message, args) {
        // Command Here
        //try {
            const user = message.mentions.users.first() || message.author
            const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
            let embed = new MessageEmbed()
            .setColor("AQUA")
            .setTitle("Avatar")
            .setImage(avatar)
            .setTimestamp()
            return message.channel.send(embed)
        //} catch(err) {
        //    message.channel.send(`An error occured, please try again !`)
        //}
	}

};