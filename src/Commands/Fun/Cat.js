const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require(`discord.js`);
const fetch = require(`node-fetch`);

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['cats', `kitty`],
            description: 'Send memes image',
            category: 'Fun'
		});
	}

	async run(message) {
        let msg = await message.channel.send("Generating . . .")
        try {
            fetch('http://aws.random.cat/meow')
            .then(res => res.json()).then(body => {

                if (![body]) {
                    msg.delete()
                    return message.channel.send("Something Broken! Please try again.")
                }

                let Embed = new MessageEmbed()
                  .setColor(`ORANGE`)
                  .setAuthor(`Cat`)
                  .setImage(body.file)
                message.channel.send(Embed);
                return msg.delete()
            })
        } catch (err) {
            msg.delete()
            return message.channel.send(`An error occured try again later`)
        }
	}

};