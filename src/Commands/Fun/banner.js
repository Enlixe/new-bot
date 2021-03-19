const Command = require('../../Structures/Command');
const figlet = require('util').promisify(require('figlet'));

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ['ascii'],
            category: 'Fun',
			usage: '<message>',
			args: true
		});
	}

	async run(msg, ...banner) {
		return msg.channel.send(await figlet(banner), { code: true });
	}

};