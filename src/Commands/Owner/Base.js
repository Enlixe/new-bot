const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: [],
            description: `This is just a base for command, what r u doing here`,
            category: 'Owner',
            usage: ``,
            userPerms: [],
            botPerms: [],
            guildOnly: true,
            ownerOnly: true,
            nsfw: false,
            args: false
		});
	}

	async run(message, args) {
        // Command Here
        message.channel.send("A")
	}

};