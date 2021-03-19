const Command = require('../../Structures/Command.js');
const { exec } = require('child_process')

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ['exec'],
            description: `Execute something`,
            category: 'Owner',
            usage: `<query>`,
            ownerOnly: true,
            args: true
		});
	}

	async run(message, ...args) {
        // Command Here
        exec(args.join(" "), (error, stdout) => {
            const response = stdout || error;
            message.channel.send(response, { split: true, code: true });
        });
	}

};