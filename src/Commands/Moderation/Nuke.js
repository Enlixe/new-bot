const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ['renew'],
            description: `Clear all chat on the channel ( Renew / NUKE )`,
            category: 'Moderation',
            userPerms: ["MANAGE_MESSAGES", "MANAGE_CHANNELS"],
            botPerms: ["MANAGE_MESSAGES", "MANAGE_CHANNELS"],
            guildOnly: true
		});
	}

	async run(message) {
        // Command Here
        const rateLimitPerUser = message.channel.rateLimitPerUser;
        var newChannel = await message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send(`This channel is been NUKED <:nuke:818362756901240892>`).then(async (msg) => {msg.delete({timeout: 5000})})
        })
        message.channel.delete();
        //newChannel.setRateLimitPerUser(rateLimitPerUser)
    }

};