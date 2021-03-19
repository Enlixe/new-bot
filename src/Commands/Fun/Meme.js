const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require(`discord.js`);
const fetch = require(`node-fetch`);

const subreddits = [
    `meme`,
    'DeepFriedMemes',
	'bonehurtingjuice',
	'surrealmemes',
	'dankmemes',
	'meirl',
	'me_irl',
	'funny'
]

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['memes'],
			description: 'Send memes image',
            category: 'Fun'
		});
	}

	async run(message) {
        let msg = await message.channel.send("Generating . . .")
        try {
            const sub = subreddits[Math.floor(Math.random() * subreddits.length)]
            const data = await fetch(`https://imgur.com/r/${sub}/hot.json`)
                .then(response => response.json())
                .then(body => body.data);
            const selected = data[Math.floor(Math.random() * data.length)];
            message.channel.send(new MessageEmbed()
                .setColor(`ORANGE`)
                .setTitle(`r/${sub}`)
                .setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`)
            );
            return msg.delete()
        } catch (err) {
            msg.delete()
            return message.channel.send(`An error occured try again later`)
        }
	}

};