const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            aliases: ["clear", "clean"],
            description: `Delete messages`,
            category: 'Moderation',
            usage: `<message>`,
            userPerms: ["MANAGE_MESSAGES"],
            botPerms: ["MANAGE_MESSAGES"],
            guildOnly: true,
            args: true
		});
	}

	async run(message, args) {
            let messageCount = args[0];
		if (messageCount > 100) messageCount = 100;

		await message.delete();
		const rawfetch = await message.channel.messages.fetch({ limit: messageCount })
            const fetch = rawfetch.filter(msg => !msg.pinned);
		const deletedMessages = await message.channel.bulkDelete(fetch, true);

		const results = {};
		for (const [, deleted] of deletedMessages) {
			const user = `${deleted.author.username}#${deleted.author.discriminator}`;
			if (!results[user]) results[user] = 0;
			results[user]++;
		}
		const userMessageMap = Object.entries(results);

		const formed = `${deletedMessages.size} message${deletedMessages.size > 1 ? 's' : ''} were removed.\n\n${userMessageMap.map(([user, messages]) => `**${user}**: ${messages}`).join('\n')}`;
		await message.channel.send(formed).then(msg => msg.delete({ timeout: 60000 }))
	}

};