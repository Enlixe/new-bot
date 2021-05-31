const Command = require('../../Structures/Command.js');
const fetch = require('node-fetch');

const valoapi = process.env.ValorantAPI

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: [],
            description: `This is just a base for command, what r u doing here`,
            category: 'Development',
            usage: `<Username> <Tagline>`,
            args: true,
            ongoing: true
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Loading Data . . .");

        fetch(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${args[0]}/${args[1]}?api_key=${valoapi}`, {
            headers: {
                'api_key': 'RGAPI-1681e887-9405-486c-8ca0-ed7e5ec66090',
            }
        })
        .then(res => res.json()).then(body => {
            console.log(body)
            message.channel.send(body)
        })
	}

};