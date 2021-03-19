const Command = require('../../Structures/Command.js');
const fetch = require("node-fetch");

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Send u some fact`,
            category: 'NekosLife'
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Generating . . .");

        fetch(`https://nekos.life/api/v2/fact`)
        .then(res => res.json()).then(body => {

            if (![body]) {
                msg.delete()
                return message.channel.send("Something Broken! Please try again.")
            }

            message.reply(`${body.fact}`);
            return msg.delete()

        })
	}

};