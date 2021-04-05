const Command = require('../../Structures/Command.js');
const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Kiss someone :3`,
            category: 'Anime',
            usage: `<user>`
		});
	}

	async run(message, args) {
        // Command Here
        if (message.mentions.users.size < 1) return message.channel.send("you can't kiss nobody")

        let msg = await message.channel.send("Generating . . .");
        let user = message.guild.member(message.mentions.users.first());

        fetch(`https://nekos.life/api/kiss`)
        .then(res => res.json()).then(body => {
            let Embed = new MessageEmbed()
                .setColor('#ffa1ff')
                .setDescription(`${user}** You got a kiss from ${message.author.username} ❤**`)
                .setImage(body.url)
            message.channel.send(Embed);
            return msg.delete()

        }).catch(console.error);
	}

};