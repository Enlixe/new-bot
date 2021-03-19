const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Send u link`,
            category: 'NSFW',
            usage: `<query>`,
            nsfw: true,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        message.channel.send(`https://www.pornhub.com/video/search?search=${args.join("+")}`)
	}

};