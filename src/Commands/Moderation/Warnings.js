const Command = require('../../Structures/Command.js');
const db = require('quick.db');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `This is just a base for command, what r u doing here`,
            category: 'Moderation',
            usage: `[user]`
		});
	}

	async run(message, args) {
        // Command Here
        const user = message.mentions.members.first() || message.author
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if(warnings === null) warnings = 0;

        message.channel.send(`${user} have **${warnings}** warning(s)`)
	}

};