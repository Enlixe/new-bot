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
            .setColor('BLURPLE')
            .setImage(body.url)
            .setDescription(`<@${message.author.id}> hug ${args[0]}`);
            
            const hugbot = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setImage(body.url)
            .setDescription(`<@${message.author.id}> hug me.. Oh, thanks, b-but i\'m only a bot...`);
            
            const sadEmb = new Discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`<@${message.author.id}> hug <@${message.author.id}>.. Oh wait! You can't hug yourself!`)
            
            const please = new Discord.MessageEmbed()
            .setDescription(`Please mention someone!`)
            .setColor(0xFF2222)

            msg.delete()

            if (!args[0]) {
                return message.channel.send({ embed: sadEmb });
            }
            if (!message.mentions.users.first()) return message.channel.send(please).then(msg => {
                // Delete message
            });
            if (message.mentions.users.first().id == 674601993964224522) {
                return message.channel.send({ embed: hugbot });
            }

            return message.channel.send({ embed: hugEmb });
            //.setColor('#ffa1ff')
        })
	}

};