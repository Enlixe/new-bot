const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require(`discord.js`);

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Rate how gay u are`,
            category: 'Fun',
		});
	}

	async run(message, args) {
        // Command Here
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "🎁".repeat(loveIndex) + "📄".repeat(10 - loveIndex);

        const embed = new MessageEmbed()
            .setColor("#FC08BD")
            .addField(`☁ **${message.member.displayName}** is  ** ${Math.floor(love)}%** gay Today! **`,`\n\n${loveLevel}`);

        message.channel.send(embed);
	}

};