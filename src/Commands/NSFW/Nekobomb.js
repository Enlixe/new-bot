const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require(`discord.js`);
const fetch = require(`node-fetch`);

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ['lewdbomb'],
            description: `.`,
            category: 'NSFW',
            nsfw: true
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Generating . . .")
        fetch('https://nekos.life/api/v2/img/lewd')
        .then(res => res.json()).then(body => {
            if (![body]) {
                msg.delete()
                return message.channel.send("Something Broken! Please try again.")
            }
            let Embed = new MessageEmbed()
                .setColor(`RANDOM`)
                .setImage(body.url)
            message.channel.send(Embed);
            return msg.delete()
        })

        // Command Here
        let msg1 = await message.channel.send("Generating . . .")
        fetch('https://nekos.life/api/v2/img/lewd')
        .then(res => res.json()).then(body => {
            if (![body]) {
                msg1.delete()
                return message.channel.send("Something Broken! Please try again.")
            }
            let Embed = new MessageEmbed()
                .setColor(`RANDOM`)
                .setImage(body.url)
            message.channel.send(Embed);
            return msg1.delete()
        })

        // Command Here
        let msg2 = await message.channel.send("Generating . . .")
        fetch('https://nekos.life/api/v2/img/lewd')
        .then(res => res.json()).then(body => {
            if (![body]) {
                msg2.delete()
                return message.channel.send("Something Broken! Please try again.")
            }
            let Embed = new MessageEmbed()
                .setColor(`RANDOM`)
                .setImage(body.url)
            message.channel.send(Embed);
            return msg2.delete()
        })

        // Command Here
        let msg3 = await message.channel.send("Generating . . .")
        fetch('https://nekos.life/api/v2/img/lewd')
        .then(res => res.json()).then(body => {
            if (![body]) {
                msg3.delete()
                return message.channel.send("Something Broken! Please try again.")
            }
            let Embed = new MessageEmbed()
                .setColor(`RANDOM`)
                .setImage(body.url)
            message.channel.send(Embed);
            return msg3.delete()
        })

        // Command Here
        let msg4 = await message.channel.send("Generating . . .")
        fetch('https://nekos.life/api/v2/img/lewd')
        .then(res => res.json()).then(body => {
            if (![body]) {
                msg4.delete()
                return message.channel.send("Something Broken! Please try again.")
            }
            let Embed = new MessageEmbed()
                .setColor(`RANDOM`)
                .setImage(body.url)
            message.channel.send(Embed);
            return msg4.delete()
        })
	}

};