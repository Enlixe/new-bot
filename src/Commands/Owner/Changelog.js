const Command = require('../../Structures/Command.js');
const moment = require('moment');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `.`,
            category: 'Owner',
            ownerOnly: true,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        let creating = await message.channel.send("Creating . . .");
        let changecontent = args.join(" ")
        message.delete()
        creating.delete()
        message.channel.send(`**CHANGELOG** - ${moment().format('l')}\n\`\`\`${changecontent}\`\`\``)
	}

};