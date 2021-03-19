const Command = require('../../Structures/Command.js');
const fetch = require("node-fetch")
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Deepfry someone`,
            category: 'Image-Gen',
            usage: `[user]`
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Deepfrying . . .")
        const user = message.mentions.users.first() || message.author
        const avatar = user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setColor("#8a2900")
            .setTitle("Deepfried!")
            .setImage(data.message)
            .setTimestamp()
            msg.delete()
            return message.channel.send(embed)
        })
	}

};