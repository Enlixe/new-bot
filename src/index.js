const EnlxClient = require(`./Structures/EnlxClient`);
const config = require(`../config.json`);

const client = new EnlxClient(config);
client.start();
