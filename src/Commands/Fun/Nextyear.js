const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require("discord.js")
const moment = require("moment");

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Displays how much time till next year`,
            category: 'Fun'
		});
	}

	async run(message, args) {
        // Command Here
        const now = new Date();
        const next = new Date(now);
        next.setFullYear(now.getFullYear() + 1);
        next.setHours(0, 0, 0, 0);
        next.setMonth(0, 1);
        const duration = next - now;
        const seconds = Math.floor((duration / 1000) % 60);
        const minutes = Math.floor((duration / 1000 / 60) % 60);
        const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        const days = Math.floor(duration / (1000 * 60 * 60 * 24));

        const embed = new MessageEmbed()
            .setAuthor("Next Year!", message.author.displayAvatarURL())
            .setColor("RANDOM")
            .setDescription(
                `There are **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds** until **${next.getFullYear()}**!`
            )
            .setFooter(`Or, in short, ${moment.duration(next - now).humanize()}.`);
        message.channel.send(embed);
	}

};