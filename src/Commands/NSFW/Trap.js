const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require(`discord.js`);
const fetch = require(`node-fetch`);

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: [],
            description: `.`,
            category: 'NSFW',
            nsfw: true
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Generating . . .")
        fetch('https://nekos.life/api/v2/img/trap')
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
	}

};