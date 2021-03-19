const Command = require('../../Structures/Command.js');
const fetch = require('node-fetch')
const { MessageEmbed } = require(`discord.js`);

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ['covid19', 'covid-19'],
            description: `.`,
            category: 'Information',
            usage: `<country / all>`,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        let msg = await message.channel.send("Searching . . .")

        let countries = args.join(" ");
        //Credit to Sarastro#7725 for the command :)

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .setColor('RED')

                msg.delete();
                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .setColor('RED')

                msg.delete();
                message.channel.send(embed)
            }).catch(e => {
                msg.delete();
                return message.channel.send('Invalid country provided')
            })
        }
	}

};