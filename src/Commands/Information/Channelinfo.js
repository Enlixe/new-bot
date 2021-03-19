const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Displays information about the channel that said message was run in.`,
            category: 'Information',
            guildOnly: true
		});
	}

	async run(message, args) {
        // Command Here
        let channel =
        message.guild.channels.cache.get(args[0]) ||
        message.guild.channels.cache.find(
            (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
        ) ||
        message.channel;

        function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
        }
        const e = new MessageEmbed()
        .setTitle(`Channel info for ${channel.name}`)
        .addField(`\u200b`, [
            `**Channel Name:** ${channel.name}`,
            `**Channel created:** ${channel.createdAt.toUTCString().substr(0, 16)} (${checkDays(channel.createdAt)})`,
            `**Channel ID:** ${channel.id}`,
            `**Channel type:** ${channel.type}`,
            `**Channel topic:** ${channel.topic || "No topic set"}`
        ])
        .setColor("RANDOM")
        .setFooter(`use a channel id to see info for that channel`);
        message.channel.send(e);
	}

};