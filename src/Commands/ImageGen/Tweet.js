const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `This is just a base for command, what r u doing here`,
            category: 'Image-Gen'
		});
	}

	async run(message, args) {
        // Command Here
        let messagess = args.slice(0).join(' ')
        let user = encodeURI(message.author.username); 
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${messagess}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Tweet!")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send(embed)
        })
	}

};