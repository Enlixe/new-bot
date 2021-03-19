const Command = require('../../Structures/Command.js');
const npmsearch = require("libnpmsearch");
const moment = require("moment");
const { MessageEmbed } = require("discord.js");

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
            description: `This is just a base for command, what r u doing here`,
            category: 'Information',
            usage: `<package name>`,
            args: true
		});
	}

	async run(message, args) {
        // Command Here
        if (!args.length) {
            return message.channel.send("Please give me package name!");
        }
        let toSearch = args.join(" ");
        npmsearch(toSearch, {
            limit: 1
        }).then(async result => {
            if (!result.length) {
                return message.channel.send("Sorry I can't find any node package you want");
            }
            let res = result[0];
            let keywords = Object.keys(res).includes("keywords") ? (res["keywords"]).map(keyword => `\`${keyword}\``) : ["No Data"];
            let maintainers = (res["maintainers"]).map(maintainer => `\`${maintainer["username"]}\``);
            let links = Object.keys(res["links"]).map(key => `**${key}：**${res["links"][key]}`);
            let publishDate = moment(res["date"]);
            await message.channel.send(
                new MessageEmbed()
                    .setColor("#C80B06")
                    .setTitle(res["name"])
                    .setDescription(res["description"])
                    .setThumbnail("https://i.imgur.com/ErKf5Y0.png")
                    .addField("Version", `\`${res["version"]}\``, true)
                    .addField("Published date", `${publishDate.format("Your formatter")} \`${publishDate.fromNow()}\``)
                    .addField("Keywords", keywords.join(", "), false)
                    .addField("Author", `\`${res["author"]["name"]}\``, true)
                    .addField("Maintainers", maintainers.join(", "), true)
                    .addField("Links", links.join("\n"), false)
            );
        });
	}

};