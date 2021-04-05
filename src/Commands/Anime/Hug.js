const Command = require('../../Structures/Command.js');
const fetch = require("node-fetch");
const Discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Hug someone 🤗`,
            category: 'Anime',
            usage: `[user]`,
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Generating . . .");

        fetch(`https://nekos.life/api/v2/img/hug`)
        .then(res => res.json()).then(body => {

            const hugEmb = new Discord.MessageEmbed()
            .setColor(0xffffff)
            .setImage(body.url);
            const sadEmb = new Discord.MessageEmbed()
            .setColor(0xffffff)
            .setImage('https://media.giphy.com/media/3oz8xLz5gnSla2STE4/giphy.gif');
            const please = new Discord.MessageEmbed()
            .setDescription(`Please mention someone!`)
            .setColor(0xFF2222)

            if (!args[0]) {
                return message.channel.send(`<@${message.author.id}> hug <@${message.author.id}>.. Oh wait! You can't hug yourself!`, { embed: sadEmb });
            }
            if (!message.mentions.users.first()) return message.channel.send(please).then(msg => {
                // Delete message
            });
            if (message.mentions.users.first().id == 674601993964224522) {
                return message.channel.send(`<@${message.author.id}> hug me.. Oh, thanks, b-but i\'m only a bot...`, { embed: hugEmb });
            }

            return message.channel.send(`<@${message.author.id}> hug ${args[0]}`, { embed: hugEmb });
            //.setColor('#ffa1ff')
        })
	}

};