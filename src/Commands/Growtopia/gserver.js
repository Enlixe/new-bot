const Command = require('../../Structures/Command.js');
const growapi = require('growapi')
const { MessageEmbed } = require("discord.js")

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ['growtopiaserver'],
            description: `This is just a base for command, what r u doing here`,
            category: 'GrowtopiaServer'
		});
	}

	async run(message, args) {
        // Command Here
        growapi.server().then(data => {

            let embed = new MessageEmbed()
              //.setAuthor("Server Info")
              .addField(`**Server Info**`, [
                  `**Server Date -** ${data.date}`,
                  `**Server Time -** ${data.time}`,
                  `**Current Online -** ${data.online}`,
                  `**Current WOTD :** ${data.wotdname}`,
                  `**WOTD Image :** ${data.wotdimage}`
              ])

            message.channel.send(embed)
        
        }).catch(error => {
            //  Handle error
            console.error(error);
        });        
	}
};