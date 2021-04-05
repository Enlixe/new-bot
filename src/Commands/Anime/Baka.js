const Command = require('../../Structures/Command.js');
const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `BAKA`,
            category: 'Anime',
            usage: `[user]`,
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Generating . . .");

        let userss = ""
        if(args[0]) userss = message.mentions.users.first().username
        let auth = ""
        if (args[0]) auth = `${message.author.username} say ${userss} BAKA !`

        fetch(`https://nekos.life/api/v2/img/baka`)
        .then(res => res.json()).then(body => {

            if (![body]) {
                msg.delete()
                return message.channel.send("Something Broken! Please try again.")
            }

            let Embed = new MessageEmbed()
                .setColor('#ffa1ff')
                .setAuthor(auth)
                .setImage(body.url)

            message.channel.send(Embed);
            return msg.delete()

        })
	}

};