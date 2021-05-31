const Command = require('../../Structures/Command.js');
const fetch = require('node-fetch');
const { MessageEmbed } = require(`discord.js`);

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: [],
            description: `This is just a base for command, what r u doing here`,
            category: 'Development',
            usage: `<pokemon>`,
            args: true,
            ongoing: true
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Loading Data . . .");

        try {
            fetch(`https://pokeapi.co/api/v2/pokemon/${args[0]}`)
            .then(res => res.json()).then(body => {

                if (!body) {
                    msg.delete()
                    return message.channel.send("Something Broken! Please try again.")
                }

                let Embed = new MessageEmbed()
                    .setColor(`RED`)
                    .setThumbnail(body.sprites.front_default)
                    .setAuthor(`PokeDex`)
                    //.setTitle(`${args[0].toUpperCase()}`)
                    .setDescription([
                        `**No.${body.id}**`,
                        `**${(body.name).toUpperCase()}**`,
                        `\u200b`,
                        `**Stats :**`,
                        `~ Weight - ${body.weight}`, 
                        `~ Height - ${body.height}`,
                        `\u200b`,
                        `~ Hp - ${body.stats[0].base_stat}`,
                        `~ Attack - ${body.stats[1].base_stat}`,
                        `~ Defense - ${body.stats[2].base_stat}`,
                        `~ Speed - ${body.stats[5].base_stat}`,
                        `\u200b`,
                        `**Type :**`,
                        `${(body.types[0].type.name).toUpperCase()} | ${ body.types[1] ? (body.types[1].type.name).toUpperCase() : "-" }`
                    ])
                message.channel.send(Embed);
                return msg.delete()

            })
        } catch (err) {
            msg.delete()
            return message.channel.send(`An error occured try again later`)
        }
	}

};