const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `Creates a poll with reactions to vote. Max is 9`,
            category: 'Utilities',
            usage: `<poll> [poll2] [poll3]`,
            userPerms: ["MANAGE_CHANNELS"],
            botPerms: ["MANAGE_CHANNELS"],
            guildOnly: true,
            args: true
		});
	}

	async run(message, [command]) {
        // Command Here
        const argss = message.content.substring(command).split(' ');
		const polls = argss.slice(1).join(' ');
		const regex = polls.match(/"[^"]+"|[\\S]+"[^"]+/g);
		if (!regex) return message.reply('Please enter your options in quotation marks. Example: e/poll "option 1" "option 2" "option 3".');
		if (regex.length > 9) {
			return message.reply('You can only have 9 poll options');
		}
		let str = '';
		const emojis = [
			'1️⃣',
			'2️⃣',
			'3️⃣',
			'4️⃣',
			'5️⃣',
			'6️⃣',
			'7️⃣',
			'8️⃣',
			'9️⃣'
		];
		let col = 0;
		for (const poll of regex) {
			str = `${str}${emojis[col]} ${poll}\n\n`;
			col++;
		}
		const embed = new MessageEmbed()
			.setDescription(str.replace(/"/g, ''));

		const msg = await message.channel.send(embed);
		for (let i = 0; i < regex.length; i++) {
			msg.react(emojis[i]);
		}
		return null;
	}

};