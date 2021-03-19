const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ['wikipedia'],
            description: `Send wikipedia link with query`,
            category: 'Information',
            usage: `<query>`,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        message.channel.send(`https://en.wikipedia.org/wiki/${args.join("+")}`)
	}

};