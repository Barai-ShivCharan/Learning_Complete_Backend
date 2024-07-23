const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating Short ID for " + url,
    });
  }
  message.reply({
    content: "Hi From BOt",
  });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});

client.login(
  "MTI2MDkwMDc3MzExMDQ4NTAyMg.GPuusi.irxN05isASFMCeZTUZ_RU9eKesZYpjB4enrhAA"
);
